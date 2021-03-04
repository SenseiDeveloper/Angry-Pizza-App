import React from 'react';
import {useDispatch} from "react-redux";
import {setStatusMenu} from '../redux/action/menuAction';

import {ButtonBasket} from './buttons/buttonBasket';
import {Link} from 'react-router-dom';

export const Navigation = () => {
    const dispatch = useDispatch();

  return (
      <nav className="navigation">
          <ul>
              <li><Link onClick={() => dispatch(setStatusMenu(false))} to="/home">Головна</Link></li>
              <li><Link onClick={() => dispatch(setStatusMenu(false))} to="/pizza">Піца</Link></li>
              <li><Link onClick={() => dispatch(setStatusMenu(false))} to="/promotions">Акції</Link></li>
              <li><Link onClick={() => dispatch(setStatusMenu(false))} to="/info">Інфо</Link></li>
              <li><ButtonBasket /></li>
          </ul>
      </nav>
  );
};
