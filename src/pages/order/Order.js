import React, {useState, useEffect} from 'react';
import './Order.scss';
import {isUserLogged} from '../../helpers/auth';

import {BasketItem} from "../../components/basketItem";
import {mathPrice} from "../../helpers/pizza";
import {AddressForm} from '../../components/addressFrom';

export const Order = () => {
    const pizzaStorage = localStorage.getItem('pizzas');
    const [pizzaState, setPizzaState] = useState([]);
    const [select, setSelect] = useState('default');

    useEffect(() => {
        setPizzaState(JSON.parse(pizzaStorage));
        mathPrice(pizzaState);
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
            <div className="container">
                <h3>Ваше замовлення:</h3>
                <div className="pizza">
                    {pizzaStorage && <BasketItem handleRemovePizza={handleRemovePizza} itm={pizzaState}/>}
                </div>
                <div className="money">
                    <p>Сумма до оплати: {mathPrice(pizzaState)} грн.</p>
                    {
                        isUserLogged() ?
                            <p>Вам буде нараховано <span>{mathPrice(pizzaState) / 10} Angry coins.</span></p>
                            : null
                    }
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
            <button className="btn btn-secondary">Оплатити</button>
        </section>
    );
};
