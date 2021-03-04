import React from 'react';
import './Main.scss';

import {Switch,Route,Redirect} from "react-router-dom";

import {Home} from '../../pages/home/Home';
import {Pizza} from "../../pages/pizza/Pizza";
import {Info} from "../../pages/info/Info";
import {Promotions} from "../../pages/promotions/Promotions";
import {Auth} from "../../pages/auth/Auth";
import {PizzaConstructor} from "../../pages/pizzaConstructor/PizzaConstructor";

export const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/pizza" component={Pizza} />
                <Route path="/promotions" component={Promotions} />
                <Route path="/info" component={Info} />
                <Route path="/auth" component={Auth} />
                <Route path="/pizza-constructor" component={PizzaConstructor} />
                <Redirect exect from="/" to="/home" />
            </Switch>
        </>
    );
};
