import React from 'react';
import './PizzaConstructor.scss';

import {ImagePizza} from './componentPizzaConstructor/imagePizza';
import {ProductsPizza} from './componentPizzaConstructor/productsPizza';
import {OrderProducts} from './componentPizzaConstructor/orderProducts';
import {SummaryPizza} from './componentPizzaConstructor/summaryPizza';

export const PizzaConstructor = () => {
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
