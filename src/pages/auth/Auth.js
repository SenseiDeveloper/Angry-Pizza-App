import React from 'react';
import './Auth.scss';

import {Switch,Route,Redirect} from "react-router-dom";
import {Login} from "./login/Login";
import {Registration} from "./registration/Registration";

export const Auth = () => {
    return (
        <section className="auth">
                <div className="container">
                    <Switch>
                        <Route path="/auth/login" component={Login} />
                        <Route path="/auth/registration" component={Registration} />
                        <Redirect exect from="/auth" to="/auth/login" />
                    </Switch>
                </div>
        </section>
    );
};
