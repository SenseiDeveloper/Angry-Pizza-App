import React from 'react';

export const PizzaItem = ({pizza}) => {
    const products = [`${pizza.products.basis.name}`,...pizza.products.products.map( p => p.name)];
    return (
        <li>
            <div className="image">
                <img src={process.env.PUBLIC_URL + pizza.image} alt={pizza.name}/>
            </div>
            <div className="text">
                <h5>{pizza.name}</h5>
                <p>{products.join(', ')}</p>
                <div className="price">
                    <p>{pizza.price} грн.</p>
                    <button className="btn btn-secondary">Замовити</button>
                </div>
            </div>
            <div className="text secondText">
                <p>{pizza.price} грн.</p>
                <button className="btn btn-secondary">Замовити</button>
            </div>
        </li>
    );
};
