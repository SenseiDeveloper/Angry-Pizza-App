import React from 'react';
import {useSelector} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './Header.scss';

import {Logo} from '../../components/logo';
import {ButtonOpenMobileMenu} from '../../components/buttons/buttonOpenMobileMenu';
import {ButtonBasket} from '../../components/buttons/buttonBasket';
import {Navigation} from '../../components/nav';
import {ModalMenu} from '../../components/modalMenu';
import {ButtonUser} from '../../components/buttons/buttonUser';

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
                   <ButtonUser />
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
