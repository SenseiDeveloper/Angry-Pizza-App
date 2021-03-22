import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {clearSelectProducts} from '../../redux/action/pizzaConstructorAction';

export const ButtonConstructor = () => {
    const dispatch = useDispatch();
    return (
        <button className="btn btn-primary" onClick={() => dispatch(clearSelectProducts())}>
            <Link to="/pizza-constructor">Створити піцу</Link>
        </button>
    );
};
