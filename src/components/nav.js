import React from 'react';
import {useDispatch} from "react-redux";
import {setStatusMenu} from '../redux/action/menuAction';

import {ButtonBasket} from './buttons/buttonBasket';
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
    const dispatch = useDispatch();

  return (
      <nav className="navigation">
          <ul>
              <li><NavLink activeClassName="active-mnu-li" onClick={() => dispatch(setStatusMenu(false))} to="/home">Головна</NavLink></li>
              <li><NavLink activeClassName="active-mnu-li" onClick={() => dispatch(setStatusMenu(false))} to="/pizza">Піца</NavLink></li>
              <li><NavLink activeClassName="active-mnu-li" onClick={() => dispatch(setStatusMenu(false))} to="/promotions">Акції</NavLink></li>
              <li><NavLink activeClassName="active-mnu-li" onClick={() => dispatch(setStatusMenu(false))} to="/info">Інфо</NavLink></li>
              <li><ButtonBasket /></li>
          </ul>
      </nav>
  );
};
