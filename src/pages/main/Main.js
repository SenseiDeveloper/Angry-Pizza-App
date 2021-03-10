import React from 'react';
import './Main.scss';
import {Switch,Route,Redirect} from "react-router-dom";

import {Home} from '../../pages/home/Home';
import {Pizza} from "../../pages/pizza/Pizza";
import {Info} from "../../pages/info/Info";
import {Promotions} from "../../pages/promotions/Promotions";
import {Auth} from "../../pages/auth/Auth";
import {PizzaConstructor} from "../../pages/pizzaConstructor/PizzaConstructor";
import {appRoutes} from "../../routes/appRoutes";

const components = {
    Home,Pizza,Info,Promotions,Auth,PizzaConstructor
};

export const Main = () => {
    return (
        <>
            <Switch>
                {
                    appRoutes.map( route =>
                        <Route path={route.path} component={components[route.component]}/>
                    )
                }
                <Redirect exect from="/" to="/home"/>
            </Switch>
        </>
    );
};
