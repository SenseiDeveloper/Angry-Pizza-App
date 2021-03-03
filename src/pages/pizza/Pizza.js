import React from 'react';
import './Pizza.scss';

import {PizzaNavigation} from '../../components/pizzaNav';

export const Pizza = () => {
    return (
        <section className="bgGrey pizza">
            <div className="innerSection">
                <div className="sectionNavigation" >
                    <PizzaNavigation />
                </div>
            </div>
        </section>
    );
};
