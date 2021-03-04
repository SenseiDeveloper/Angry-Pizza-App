import React from 'react';
import './Pizza.scss';

import {PizzaNavigation} from '../../components/pizzaNav';
import {ButtonConstructor} from '../../components/buttons/buttonConstructor';

export const Pizza = () => {
    return (
        <section className="bgGrey pizza">
            <div className="innerSection">
                <div className="sectionNavigation" >
                    <PizzaNavigation />
                </div>
                <div className="container">
                    <ButtonConstructor />
                    11
                </div>
            </div>
        </section>
    );
};
