import React from 'react';

export const HistoryItem = ({history}) => {
    const name = history.pizzas.map(e => e.name);
    return (
        <ul>
            <li><p>{name.join()}</p></li>
            <li><p>{history.price} грн.</p></li>
        </ul>
    );
};
