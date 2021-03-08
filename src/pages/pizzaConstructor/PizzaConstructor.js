import React from 'react';
import './PizzaConstructor.scss';

import {ImagePizza} from '../../components/componentPizzaConstructor/imagePizza';
import {ProductsPizza} from '../../components/componentPizzaConstructor/productsPizza';
import {OrderProducts} from '../../components/componentPizzaConstructor/orderProducts';
import {SummaryPizza} from '../../components/componentPizzaConstructor/summaryPizza';

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
