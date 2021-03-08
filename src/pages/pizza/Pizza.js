import React from 'react';
import './Pizza.scss';
import {Switch,Route,Redirect} from "react-router-dom";

import {PizzaNavigation} from '../../components/pizzaNav';
import {User} from '../../components/user/user';
import {Shop} from "./shop/Shop";
import {List} from "./list/List";
import {OrderHistory} from "./history/OrderHistory";
import PrivateRoute from "../../components/privateRouter";

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
                <div className="sectionContent">
                    { !authStatus ?
                        <User user={user}/> : null}

                        <Switch>
                            <Route path="/pizza/shop" component={Shop} />
                            <PrivateRoute path="/pizza/list" component={List}/>
                            <PrivateRoute path="/pizza/history" component={OrderHistory}/>
                            <Redirect exect from="/pizza" to="/pizza/shop" />
                        </Switch>

                </div>
            </div>
        </section>
    );
};
