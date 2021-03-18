import React from 'react';
import {useDispatch} from "react-redux";

import {setStatusBasketModal} from '../../../redux/action/menuAction';
import {setPizzaToLocalStorage} from '../../../helpers/pizza';

export const PizzaItem = ({pizza}) => {
    const dispatch = useDispatch();
    const products = [`${pizza.products.basis.name}`,...pizza.products.products.map( p => p.name)]

    const handleSetPizzaToLocalStorage = (itm) => {
        dispatch(setStatusBasketModal());
        setPizzaToLocalStorage(itm);
    };

    return (
        <li>
            <div className="image">
                <img src={process.env.PUBLIC_URL + pizza.image} alt={pizza.name}/>
            </div>
            <div className="text">
                <h5>{pizza.name}</h5>
                <p>{products.join(', ')}</p>
                <div className="price">
                    <p>{pizza.price} грн.</p>
                    <button
                        onClick={()=> handleSetPizzaToLocalStorage(pizza)}
                        className="btn btn-secondary">Замовити</button>
                </div>
            </div>
            <div className="text secondText">
                <p>{pizza.price} грн.</p>
                <button
                    onClick={() => handleSetPizzaToLocalStorage(pizza)}
                    className="btn btn-secondary">Замовити</button>
            </div>
        </li>
    );
};
