import React from 'react';
import {Link} from "react-router-dom";

export const SubPizzaNavigation = ({menuStatus}) => {
    return (
        <>
            {
                menuStatus ?
                    <ul className="subInfoIcon">
                        <li></li>
                        <li><Link to="/auth/login">Увійти</Link></li>
                        <li><Link to="/auth/registration">Зареєструватись</Link></li>
                    </ul>
                :
                    <ul className="subInfoIcon">
                        <li></li>
                        <li><Link to="/pizza">Піца</Link></li>
                        <li><Link to="/pizza">Моя піца</Link></li>
                        <li><Link to="/pizza">Покупки</Link></li>
                    </ul>
            }
        </>
    );
};
