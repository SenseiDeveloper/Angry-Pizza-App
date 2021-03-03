import React from 'react';
import './Main.scss';

import {Switch,Route,Redirect} from "react-router-dom";

import {Home} from '../../pages/home/Home';
import {Pizza} from "../../pages/pizza/Pizza";
import {Delivery} from "../../pages/delivery/Delivery";
import {About} from "../../pages/about/About";
import {Auth} from "../../pages/auth/Auth";

export const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/pizza" component={Pizza} />
                <Route path="/delivery" component={Delivery} />
                <Route path="/about" component={About} />
                <Route path="/auth" component={Auth} />
                <Redirect exect from="/" to="/home" />
            </Switch>
        </>
    );
};
