import React from 'react';

import {ButtonBasket} from './buttons/buttonBasket';

export const Navigation = () => {
  return (
      <nav className="navigation">
          <ul>
              <li>Головна</li>
              <li>Піца</li>
              <li>Доставка</li>
              <li>Про нас</li>
              <li><ButtonBasket /></li>
          </ul>
      </nav>
  );
};
