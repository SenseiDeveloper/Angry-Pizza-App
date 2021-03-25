import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import {BiShoppingBag} from 'react-icons/bi';
import {CgClose} from 'react-icons/cg';
import {setStatusBasketModal} from "../../redux/action/menuAction";
import {BasketItem} from '../basketItem';
import {mathPrice} from '../../helpers/pizza';

export const ModalBasket = () => {
    const history = useHistory();
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

    const openOrderPage = () => {
        history.push('/order');
        dispatch(setStatusBasketModal());
    };

    useEffect(() => {
        setBasketState(JSON.parse(pizzaStorage));
        mathPrice(basketState);
    }, []);

    return (
        <div className="modalBasket">
            <div className="basket">
                <button id="close" onClick={() => dispatch(setStatusBasketModal())}><CgClose/></button>
                <h5 className="title"><BiShoppingBag/> Корзина</h5>
                {
                    !pizzaStorage ? <p>Ви не додали продуктів в корзину</p> :
                        pizzaStorage.length === 2 || pizzaStorage.length === 0  ?
                        <p>Ви не додали продуктів в корзину</p> :
                        <>
                            <BasketItem  handleRemovePizza={handleRemovePizza} itm={basketState}/>
                            <div className="order">
                                <p>Сумма: {mathPrice(basketState)}</p>
                                <button className="btn btn-secondary" onClick={() => openOrderPage()}>Оплатити</button>
                            </div>
                        </>

                }
            </div>
        </div>
    );
};
