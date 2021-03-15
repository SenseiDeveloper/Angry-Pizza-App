import React from 'react';

import {BiShoppingBag} from 'react-icons/bi';
import {useDispatch} from "react-redux";
import {setStatusBasketModal} from '../../redux/action/menuAction';

export const ButtonBasket = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(setStatusBasketModal())} className="btn-basket"><BiShoppingBag /></button>;
};
