import React from 'react';

import {isUserLogged} from '../../helpers/auth';

export const Bonus = ({pizza}) => {
    return (
        <>
            {
                isUserLogged() && pizza.length >= 3 ?
                    <p>Вам буде додатково нараховано 58 акційних Angry Coins</p> : null
            }
        </>
    );
};
