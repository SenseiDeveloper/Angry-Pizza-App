import React from 'react';
import './Pizza.scss';
import {Switch,Route,Redirect} from "react-router-dom";

import {PizzaNavigation} from '../../components/pizzaNav';
import {User} from '../../components/user/user';
import {Shop} from "./shop/Shop";
import {List} from "./list/List";
import {OrderHistory} from "./history/OrderHistory";

export const Pizza = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const authStatus = !token && !user;

    return (
        <section className="bgGrey pizza">
            <div className="innerSection">
                <div className="sectionNavigation" >
                    <PizzaNavigation authStatus={authStatus}/>
                </div>
                <div className="contentBlock">
                    { !authStatus ?
                        <User user={user}/> : null}
                    <div className="container">
                        <Switch>
                            <Route path="/pizza/shop" component={Shop} />
                            <Route path="/pizza/list" component={List} />
                            <Route path="/pizza/history" component={OrderHistory} />
                            <Redirect exect from="/pizza" to="/pizza/shop" />
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    );
};
