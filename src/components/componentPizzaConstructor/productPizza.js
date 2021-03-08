import React from 'react';

export const ProductPizza = ({product}) => {
    return (
        <ul>
            {
                product && product.map( prod =>
                    <li key={prod.id}>
                        <div className="icon">
                            <img src={process.env.PUBLIC_URL + prod.icon} alt={prod.name}/>
                        </div>
                        <p>{prod.name}</p>
                    </li>
                )
            }
        </ul>
    );
};
