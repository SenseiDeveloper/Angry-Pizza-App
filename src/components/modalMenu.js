import React from 'react';

import {Navigation} from "./nav";
import {CgClose} from 'react-icons/cg';

export const ModalMenu = ({handleMenuStatus}) => {
    return (
        <div className="modalMenu">
            <button onClick={() => handleMenuStatus()}><CgClose /></button>
            <Navigation />
        </div>
    );
};
