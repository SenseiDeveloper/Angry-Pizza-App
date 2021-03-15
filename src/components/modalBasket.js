import React, {useEffect, useState} from 'react';

import {BiShoppingBag} from 'react-icons/bi';
import {CgClose} from 'react-icons/cg';
import {setStatusBasketModal} from "../redux/action/menuAction";
import {useDispatch} from "react-redux";
import {BasketItem} from '../components/basketItem';

export const ModalBasket = () => {
    const dispatch = useDispatch();
    const pizzaStorage = localStorage.getItem('pizzas');
    const [basketState, setBasketState] = useState([]);

    const handleRemovePizza = (pizza) => {
        const pizzaArray = JSON.parse(pizzaStorage);
        const arrayIndex = pizzaArray.findIndex(p => p.id === pizza.id);
        pizzaArray.splice(arrayIndex, 1);
        localStorage.setItem('pizzas', JSON.stringify(pizzaArray));
        setBasketState(pizzaArray);
    };

    const mathPrice = () =>{
        const price = basketState.map( e => e.price);
        const setPrice = price.reduce((one,two) => { return one + two},0);
        return setPrice;
    };

    useEffect(() => {
        setBasketState(JSON.parse(pizzaStorage));
        mathPrice();
    }, []);
    return (
        <div className="modalBasket">
            <div className="basket">
                <button id="close" onClick={() => dispatch(setStatusBasketModal())}><CgClose/></button>
                <h5 className="title"><BiShoppingBag/> Корзина</h5>
                {
                    !pizzaStorage ? <p>Ви не додали продуктів в корзину</p> :
                        pizzaStorage.length === 2 ?
                        <p>Ви не додали продуктів в корзину</p> :
                        <>
                            <BasketItem  handleRemovePizza={handleRemovePizza} itm={basketState}/>
                            <div className="order">
                                <p>Сумма: {mathPrice()}</p>
                                <button className="btn btn-secondary">Оплатити</button>
                            </div>
                        </>

                }
            </div>
        </div>
    );
};
