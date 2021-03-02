import React,{useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import './Header.scss';

import {Logo} from '../logo';
import {ButtonOpenMobileMenu} from '../buttons/buttonOpenMobileMenu';
import {ButtonBasket} from '../buttons/buttonBasket';
import {Navigation} from '../nav';
import {ModalMenu} from '../modalMenu';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuStatus = () => {
        setShowMenu(!showMenu);
    };

  return (
   <header>
       <div className="container">
           <div className="header-inner">
               <div className="logo">
                   <Logo/>
               </div>
               <div className="menu">
                   <Navigation />
                   <ButtonOpenMobileMenu handleMenuStatus={handleMenuStatus}/>
                   <ButtonBasket />
                    <CSSTransition
                        in={showMenu}
                        timeout={300}
                        classNames="menu"
                        unmountOnExit
                   >
                       <ModalMenu handleMenuStatus={handleMenuStatus}/>
                   </CSSTransition>
               </div>
           </div>
       </div>
   </header>
  );
};
