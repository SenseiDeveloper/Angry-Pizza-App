import React from 'react';
import {useDispatch} from "react-redux";
import {setStatusMenu} from '../redux/action/menuAction';

import {Navigation} from "./nav";
import {CgClose} from 'react-icons/cg';


export const ModalMenu = () => {
    const dispatch = useDispatch();
    return (
        <div className="modalMenu">
            <button onClick={() => dispatch(setStatusMenu(false))}><CgClose /></button>
            <Navigation/>
        </div>
    );
};
