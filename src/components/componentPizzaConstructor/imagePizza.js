import React from 'react';

export const ImagePizza = () => {
    return(
        <div className="imagePizzaConstructor">
            <img src={process.env.PUBLIC_URL + '/images/image_products/tomate-basis.svg'} alt="angry pizza"/>
        </div>
    );
};
