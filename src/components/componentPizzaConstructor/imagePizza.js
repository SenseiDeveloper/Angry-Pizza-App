import React from 'react';
import {useSelector} from "react-redux";

export const ImagePizza = () => {
    const products = useSelector( state => state.pizzaConstructor.selectProducts);
    console.log(products.products);
    return(
        <div className="imagePizzaConstructor">
            <div className="basis">
                {
                    Object.entries(products.basis).length === 0 ?
                        <img src={process.env.PUBLIC_URL + '/images/image_products/tomate-basis.svg'} alt="angry pizza"/> :
                        <img src={process.env.PUBLIC_URL + products.basis.icon} alt="angry pizza"/>
                }
            </div>
            <div className="products">
                {
                    products.products.map( p =>
                        <img key={p.id} src={process.env.PUBLIC_URL + p.image} alt="angry pizza"/>
                    )
                }
            </div>
        </div>
    );
};
