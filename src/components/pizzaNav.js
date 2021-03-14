import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStatusVerticalMenu,closeVerticalMenu} from '../redux/action/menuAction';

import {FaUserCog} from 'react-icons/fa';
import {GiFullPizza} from 'react-icons/gi';
import {IoMdPizza} from 'react-icons/io';
import {AiFillShop} from 'react-icons/ai';
import {NavLink} from "react-router-dom";
import {FiChevronRight} from 'react-icons/fi';
import {FiChevronLeft} from 'react-icons/fi';

export const PizzaNavigation = () => {
    const showMenu = useSelector(state => state.menu.horizontalMenu);
    const dispatch = useDispatch();

    return (
        <>
            <div className={`wrapList ${showMenu? 'activeList' : 'inActiveList'}`}>
                <ul>
                    <li className="toggle" onClick={() => dispatch(setStatusVerticalMenu())}>
                        <div className="icon">
                            {
                                showMenu && showMenu ? <FiChevronLeft /> : <FiChevronRight />
                            }
                        </div>
                    </li>
                    <li>
                        <NavLink activeClassName="active-nav" to="/pizza/shop" onClick={() => dispatch(closeVerticalMenu())}>
                            <div className="icon"><GiFullPizza /></div>
                            <div className="title">Піца</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-nav" to="/pizza/list" onClick={() => dispatch(closeVerticalMenu())}>
                            <div className="icon"><IoMdPizza /></div>
                            <div className="title">Моя піца</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-nav" to="/pizza/history" onClick={() => dispatch(closeVerticalMenu())}>
                            <div className="icon"><AiFillShop /></div>
                            <div className="title">Покупки</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-nav" to="/pizza/profile" onClick={() => dispatch(closeVerticalMenu())}>
                            <div className="icon"><FaUserCog /></div>
                            <div className="title">Профіль</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};
