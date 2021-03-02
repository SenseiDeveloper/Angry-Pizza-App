import React from 'react';

import {FiMenu} from 'react-icons/fi';

export const ButtonOpenMobileMenu = ({handleMenuStatus}) => {
    return <button onClick={()=> handleMenuStatus()} className="btn-mobile-menu"><FiMenu /></button>;
};
