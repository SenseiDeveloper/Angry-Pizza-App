import React from 'react';

export const SelectBasis = ({product}) => {
    return(
        <ul>
            {
                product &&
                <li key={product.id}>
                    <p>{product.name}</p>
                </li>
            }
        </ul>
    );
};
