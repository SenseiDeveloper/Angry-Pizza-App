import React from 'react';

export const BasketItem = ({itm, handleRemovePizza}) => {
    return (
        <ul>
            {
                itm.map(p =>
                    <li key={p.id}>
                        <div className="block">
                            <div className="icon">
                                <img src={process.env.PUBLIC_URL + p.image} alt={p.name}/>
                            </div>
                            <p className="name">{p.name}</p>
                            <p className="price">{p.price} грн.</p>
                        </div>
                        <div className="block">
                            <button onClick={() => handleRemovePizza(p)} className="btn btn-primary">Видалити</button>
                        </div>
                    </li>
                )
            }
        </ul>
    );
};
