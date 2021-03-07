import React from 'react';
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

export const PizzaNavigation = ({authStatus}) => {
    const showMenu = useSelector(state => state.menu.horizontalMenu);
    const dispatch = useDispatch();

    return (
        <div className="wrapList">
            {
                authStatus ?
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
                <SubPizzaNavigation menuStatus={authStatus}/>
            </CSSTransition>
        </div>
    );
};
