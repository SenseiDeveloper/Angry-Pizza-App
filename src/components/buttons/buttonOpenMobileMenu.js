import React from 'react';
import {useDispatch} from 'react-redux';
import {setStatusMenu} from '../../redux/action/menuAction';

import {FiMenu} from 'react-icons/fi';

export const ButtonOpenMobileMenu = () => {
    const dispatch = useDispatch();

    return <button onClick={ () => dispatch(setStatusMenu()) } className="btn-mobile-menu"><FiMenu /></button>;
};
