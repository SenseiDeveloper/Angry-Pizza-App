import React from 'react';
import './Home.scss';

import {HomeText} from '../../components/homeText';
import {PizzaImage} from '../../components/pizzaImage';

export const Home = () => {
    return (
      <section className="home">
          <div className="container">
              <HomeText />
              <button className="btn-info">Замовити</button>
              <PizzaImage />
          </div>
      </section>
    );
};
