import React,{useEffect,useState,useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {isUserLogged} from '../../../helpers/auth';
import {setMessage} from "../../../redux/action/messageAction";
import {savePizza} from '../../../redux/action/pizzaConstructorAction';
import {pizzaValidation, setPizzaToLocalStorage} from '../../../helpers/pizza';
import {setStatusBasketModal} from "../../../redux/action/menuAction";

export const SummaryPizza = () => {
    const input = useRef(null);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const [name,setName] = useState('Моя піцца');
    const products = useSelector(state => state.pizzaConstructor.selectProducts);

    const userPizzaCreator = () => {
        const userID = JSON.parse(localStorage.getItem('user')).id;
        return  {
            userID,
            pizza:{
                name,
                image: '/images/image_pizza/angry.jpg',
                price,
                products
            }
        };
    };

    const handleSetPizzaToLocalStorage = () => {
        if(pizzaValidation(products) === false){
            const pizza = userPizzaCreator();
            const pizzaObj = {
                id: new Date(),
                image: pizza.pizza.image,
                name: pizza.pizza.name,
                price: pizza.pizza.price,
                products: pizza.pizza.products
            };
            setPizzaToLocalStorage(pizzaObj);
            dispatch(setStatusBasketModal());
        }else {
            dispatch(setMessage({
                message: pizzaValidation(products),
                status: 'warning'
            }));
        }
    };

    const savedPizza = () => {
        if(isUserLogged()){
            if(pizzaValidation(products) === false){
                if (name.length === 0){
                    dispatch(setMessage({
                        message: 'Назвіть піцу',
                        status: 'info'
                    }));
                    input.current.focus();
                }else {
                    dispatch(savePizza(userPizzaCreator()));
                }
            }else {
                dispatch(setMessage({
                    message: pizzaValidation(products),
                    status: 'warning'
                }));
            }
        } else {
            dispatch(setMessage({
                message: 'Зберігати піцу можуть тільки зареєстровані користувачі',
                status: 'danger'
            }));
        }
    };

    useEffect(()=>{
        let priceArray = [];
        let basisPrice = 0;
        if(Object.keys(products.basis).length !==0){
             basisPrice = products.basis.price;
        }
        if(products.products.length !== 0){
            const productsPrice = products.products.map( p => p.price);
            priceArray = [...productsPrice];
        }

        const price = [basisPrice,...priceArray].reduce((sum,cur) => {return sum + cur},0);
        setPrice(price);
    },[products]);

    return (
        <div className="summaryPizza">
            <h5>Загальна сумма: {price} грн.</h5>
            <input type="text" placeholder="Назва піци" value={name} onChange={event => setName(event.target.value)} ref={input}/>
            <button className="btn btn-secondary" onClick={() => savedPizza()}>Зберегти піцу</button>
            <button className="btn btn-primary" onClick={() => handleSetPizzaToLocalStorage() }>Добавити в корзину</button>
        </div>
    );
};
