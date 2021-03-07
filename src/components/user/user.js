import React from 'react';
import './user.scss';

import {FaUserCircle} from 'react-icons/fa';
import {ButtonLogout} from '../buttons/buttonLogout';

export const User = ({user}) => {
    const activeUser = JSON.parse(user);
    return (
        <div className="user">
            <div className="icon">
                <FaUserCircle />
            </div>
            <div className="userData">
                <h5>{activeUser && activeUser.name}</h5>
                <p>{activeUser && activeUser.phone}</p>
            </div>
            <ButtonLogout />
        </div>
    )
};
