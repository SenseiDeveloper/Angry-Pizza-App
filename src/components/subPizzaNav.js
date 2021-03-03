import React from 'react';
import {Link} from "react-router-dom";

export const SubPizzaNavigation = () => {
    return (
        <ul className="subInfoIcon">
            <li></li>
            <li><Link to="/auth/login">Увійти</Link></li>
            <li><Link to="/auth/registration">Зареєструватись</Link></li>
        </ul>
    );
};
