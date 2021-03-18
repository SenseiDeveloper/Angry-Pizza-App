import React from 'react';
import './Auth.scss';
import {authRoutes} from "../../routes/authRoutes";
import {Switch,Route,Redirect} from "react-router-dom";

import {Login} from "./login/Login";
import {Registration} from "./registration/Registration";

const components = {
    Login,Registration
};

export const Auth = () => {
    return (
        <section className="auth">
                <div className="container">
                    <Switch>
                        {
                            authRoutes.map(route => <Route key={route.path} path={route.path} component={components[route.component]} />)
                        }
                        <Redirect exect from="/auth" to="/auth/login" />
                    </Switch>
                </div>
        </section>
    );
};
