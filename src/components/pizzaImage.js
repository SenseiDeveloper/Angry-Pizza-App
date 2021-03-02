import React from 'react';

export const PizzaImage = () => {
    return(
        <div className="home-image-wrap">
            <img src={process.env.PUBLIC_URL + 'images/pizza/pizza-min.png'} id="home-pizza" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/flour-min.png'} id="home-flour" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/cheese-min.png'} id="home-cheese" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/basil-min.png'} id="home-basil" alt="Angry Pizza"/>
            <img src={process.env.PUBLIC_URL + 'images/pizza/meat-min.png'} id="home-meat" alt="Angry Pizza"/>
        </div>
    );
};
