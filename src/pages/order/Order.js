import React, {useState, useEffect} from 'react';
import './Order.scss';
import {isUserLogged} from '../../helpers/auth';
import {BasketItem} from "../../components/basketItem";
import {mathPrice} from "../../helpers/pizza";
import {AddressForm} from '../../components/addressFrom';
import {Bonus} from './bonus';
import {DefaultModal} from "../../components/modal/defaultModal";
import {Payment} from '../../components/payment';
import {useDispatch} from "react-redux";
import {setMessage} from '../../redux/action/messageAction';
import {saveHistoryPizza} from '../../redux/action/userAction';
import {createObjHistory} from '../../helpers/pizza';

export const Order = () => {
    const dispatch = useDispatch();
    const pizzaStorage = localStorage.getItem('pizzas');
    const [pizzaState, setPizzaState] = useState([]);
    const [select, setSelect] = useState('default');
    const [bonus, setBonus] = useState(0);
    let price = mathPrice(pizzaState) / 10;
    const [modalState,setModalState] = useState(false);

    const handleBuy = type => {
        if (pizzaState.length === 0){
            dispatch(setMessage({
                message: 'Оберіть піцу',
                status: 'info'
            }));
        }else {
            if (select === 'default'){
                dispatch(setMessage({
                    message: 'Оберіть спосіб доставки',
                    status: 'info'
                }));
            }else {
                if(type === 'money'){
                    if (isUserLogged()){
                        const user = JSON.parse(localStorage.getItem('user')).coins;
                        const newPrice = user + price;
                        dispatch(saveHistoryPizza(createObjHistory(pizzaStorage,pizzaState,newPrice,bonus)));
                        setModalState(true);
                    } else {
                        setModalState(true);
                    }
                }else {
                    const priceMoney = mathPrice(pizzaState);
                    const user = JSON.parse(localStorage.getItem('user')).coins;
                    if((user - priceMoney) < 0){
                        dispatch(setMessage({
                            message: 'У вас недостатньо бонусів',
                            status: 'danger'
                        }));
                    }else {
                        const user = JSON.parse(localStorage.getItem('user')).coins;
                        const priceMoney = mathPrice(pizzaState);
                        const newPrice = user - priceMoney;
                        dispatch(saveHistoryPizza(createObjHistory(pizzaStorage,pizzaState,newPrice,0)));
                        setModalState(true);
                    }
                }
            }
        }
    };

    const handleChangeModalState = (state) => {
        setModalState(state);
    };

    useEffect(() => {
        const pizzas = JSON.parse(pizzaStorage);
        setPizzaState(pizzas);
        mathPrice(pizzaState);
        if (pizzas.length > 2){
            setBonus(58);
        }
    }, []);

    const handleRemovePizza = (pizza) => {
        const pizzaArray = JSON.parse(pizzaStorage);
        const arrayIndex = pizzaArray.findIndex(p => p.id === pizza.id);
        pizzaArray.splice(arrayIndex, 1);
        localStorage.setItem('pizzas', JSON.stringify(pizzaArray));
        setPizzaState(pizzaArray);
    };

    return (
        <section className="bgGrey order">
            <DefaultModal
                component={Payment}
                title={'Оплата'}
                open={modalState}
                handleChangeModalState={handleChangeModalState}
            />
            <div className="container">
                <h3>Ваше замовлення:</h3>
                <div className="pizza">
                    {pizzaStorage && <BasketItem handleRemovePizza={handleRemovePizza} itm={pizzaState}/>}
                </div>
                <div className="money">
                    <p>Сумма до оплати: {mathPrice(pizzaState)} грн.</p>
                    {
                        isUserLogged() ?
                            <p>Вам буде нараховано <span>{price} Angry coins.</span></p>
                            : null
                    }
                    <Bonus pizza={pizzaState}/>
                </div>
                <div className="delivery">
                    <div className="select-wrapper">
                        <select onChange={event => setSelect(event.target.value)} defaultValue={'default'}>
                            <option disabled value="default">Спосіб доставки</option>
                            <option value="site">Самовивіз</option>
                            <option value="address">Доставка по адресу</option>
                        </select>
                        <div className="select-arrow"></div>
                        <div className="select-arrow"></div>
                    </div>
                {
                    select === 'default' ?
                        <p>Виберіть спосіб доставки</p> :
                        select === 'site' ?
                            <p>Ми знаходимось в м. Івано-Франківськ, вул. Коновальця 11111</p>
                        :
                        <AddressForm />
                }
                </div>
            </div>
           <div className="btnContainer">
               <button className="btn btn-secondary" onClick={()=> handleBuy('money')}>Оплатити</button>
               {
                   isUserLogged() ?
                       <button className="btn btn-primary" onClick={()=> handleBuy('bonus')}>Оплатити бонусами</button>
                       :null
               }
           </div>
        </section>
    );
};
