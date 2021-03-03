import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';

import {HomeText} from '../../components/homeText';
import {PizzaImage} from '../../components/pizzaImage';

export const Home = () => {
    return (
      <section className="home">
          <div className="container">
              <HomeText />
              <button className="btn-info"><Link to="/pizza">Замовити</Link></button>
              <PizzaImage />
          </div>
      </section>
    );
};
