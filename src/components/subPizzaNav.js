import React from 'react';
import {NavLink} from "react-router-dom";

export const SubPizzaNavigation = ({menuStatus}) => {
    return (
        <>
            {
                menuStatus ?
                    <ul className="subInfoIcon">
                        <li></li>
                        <li><NavLink activeClassName="active-nav" to="/auth/login">Увійти</NavLink></li>
                        <li><NavLink activeClassName="active-nav" to="/auth/registration">Зареєструватись</NavLink></li>
                    </ul>
                :
                    <ul className="subInfoIcon">
                        <li></li>
                        <li><NavLink activeClassName="active-nav" to="/pizza/shop">Піца</NavLink></li>
                        <li><NavLink activeClassName="active-nav" to="/pizza/list">Моя піца</NavLink></li>
                        <li><NavLink activeClassName="active-nav" to="/pizza/history">Покупки</NavLink></li>
                    </ul>
            }
        </>
    );
};
