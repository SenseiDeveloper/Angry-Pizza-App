import React from 'react';
import {useDispatch} from "react-redux";
import {countIncrementSelectProducts, countDecrementSelectProducts} from '../../redux/action/pizzaConstructorAction';

import { FaPlus } from 'react-icons/fa';
import { FaMinus} from 'react-icons/fa';
import {CgClose} from 'react-icons/cg';
import action from '../../redux/action/index';


export const SelectProduct = ({products}) => {
    const dispatch = useDispatch();

    const handleRemoveProduct = (prod) => {
        prod.select = false;
        dispatch(action.removeSelectProduct(prod));
    };

    const handleCountIncrementProduct = (prod) => {
        prod.count++;
        dispatch(countIncrementSelectProducts(prod));
    };

    const handleCountDecrementProduct = (prod) => {
        if(prod.count > 1){
            prod.count--;
            dispatch(countDecrementSelectProducts(prod));
        }
    };

    return (
            <ul>
                {
                    products.map( p =>
                        <li key={p.id}>
                            <p>{p.name} ({p.weight * p.count}грам)</p>
                            <p>
                                <button onClick={() => handleCountDecrementProduct(p)}><FaMinus /></button>
                                            {p.count}
                                <button onClick={() => handleCountIncrementProduct(p)}><FaPlus /></button>
                            </p>
                            <div className="right">
                                <p>
                                    {p.price * p.count} грн.
                                </p>
                                <button onClick={()=> handleRemoveProduct(p)}><CgClose /></button>
                            </div>
                        </li>
                    )
                }
            </ul>
    );
};
