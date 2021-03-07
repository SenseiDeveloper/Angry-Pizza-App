import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setStatusVerticalMenu} from '../redux/action/menuAction';
import { CSSTransition } from 'react-transition-group';

import {AiOutlineMenuUnfold} from 'react-icons/ai';
import {FiUserPlus} from 'react-icons/fi';
import {BiUserCircle} from 'react-icons/bi';
import {SubPizzaNavigation} from './subPizzaNav';
import {GiFullPizza} from 'react-icons/gi';
import {IoMdPizza} from 'react-icons/io';
import {AiFillShop} from 'react-icons/ai';

export const PizzaNavigation = () => {
    const showMenu = useSelector(state => state.menu.horizontalMenu);
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const menuStatus = !token && !user;

    return (
        <div className="wrapList">
            {
                menuStatus ?
                    <ul className="iconList" onClick={() => dispatch(setStatusVerticalMenu())}>
                        <li className={showMenu ? 'activeLi' : ''}><AiOutlineMenuUnfold/></li>
                        <li><BiUserCircle/></li>
                        <li><FiUserPlus/></li>
                    </ul>
                    :
                    <ul className="iconList" onClick={() => dispatch(setStatusVerticalMenu())}>
                        <li className={showMenu ? 'activeLi' : ''}><AiOutlineMenuUnfold/></li>
                        <li><GiFullPizza /></li>
                        <li><IoMdPizza /></li>
                        <li><AiFillShop /></li>
                    </ul>
            }
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="menu"
                unmountOnExit
            >
                <SubPizzaNavigation menuStatus={menuStatus}/>
            </CSSTransition>
        </div>
        /*<div className="wrapList">
            <ul className="iconList" onClick={() => dispatch(setStatusVerticalMenu())}>
                <li className={showMenu ? 'activeLi' : ''}><AiOutlineMenuUnfold/></li>
                <li><BiUserCircle/></li>
                <li><FiUserPlus/></li>
            </ul>
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="menu"
                unmountOnExit
            >
                <SubPizzaNavigation />
            </CSSTransition>
        </div>*/
    );
};
