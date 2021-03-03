import React from 'react';
import {useSelector} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './Header.scss';

import {Logo} from '../logo';
import {ButtonOpenMobileMenu} from '../buttons/buttonOpenMobileMenu';
import {ButtonBasket} from '../buttons/buttonBasket';
import {Navigation} from '../nav';
import {ModalMenu} from '../modalMenu';

export const Header = () => {
    const showMenu = useSelector( state => state.menu.mobileMenu);

  return (
   <header>
       <div className="container">
           <div className="header-inner">
               <div className="logo">
                   <Logo/>
               </div>
               <div className="menu">
                   <Navigation />
                   <ButtonOpenMobileMenu />
                   <ButtonBasket />
                    <CSSTransition
                        in={showMenu}
                        timeout={300}
                        classNames="menu"
                        unmountOnExit
                   >
                       <ModalMenu />
                   </CSSTransition>
               </div>
           </div>
       </div>
   </header>
  );
};
