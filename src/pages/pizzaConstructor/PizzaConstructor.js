import React, {useEffect} from 'react';
import './PizzaConstructor.scss';

import {ImagePizza} from './componentPizzaConstructor/imagePizza';
import {ProductsPizza} from './componentPizzaConstructor/productsPizza';
import {OrderProducts} from './componentPizzaConstructor/orderProducts';
import {SummaryPizza} from './componentPizzaConstructor/summaryPizza';
import {fetchProducts,editPizzaFetch} from "../../redux/action/pizzaConstructorAction";
import {useDispatch, useSelector} from "react-redux";

export const PizzaConstructor = () => {
    const dispatch = useDispatch();
    const editPizza = useSelector(state => state.pizzaConstructor.editPizza);

    useEffect(()=>{
        if (Object.keys(editPizza).length !== 0){
            dispatch(editPizzaFetch(editPizza));
        }else {
            dispatch(fetchProducts());
        }
    },[]);

    return (
        <section className="bgGrey pizzaConstructor">
            <div className="container">
                <h3>Конструктор піци</h3>
                <div className="innerBlockFirst">
                        <ProductsPizza />
                        <ImagePizza />
                </div>
                    <div className="innerBlockSecond">
                        <OrderProducts />
                        <SummaryPizza />
                    </div>
                </div>
        </section>
    );
};
