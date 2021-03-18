import React,{useEffect} from 'react';
import './Pizza.scss';
import {Switch, Route, Redirect} from "react-router-dom";
import PrivateRoute from "../../components/privateRouter";
import {useDispatch, useSelector} from "react-redux";

import {PizzaNavigation} from '../../components/pizzaNav';
import {Shop} from "./shop/Shop";
import {List} from "./list/List";
import {OrderHistory} from "./history/OrderHistory";
import {Profile} from '../pizza/profile/Profile';
import {fetchPizzas} from '../../redux/action/pizzaAction';


export const Pizza = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    let authStatus = !token && !user;
    const stateAuth = useSelector(state => state.auth.token);

    useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    useEffect(() => {
        authStatus = !token && !user;
    }, [stateAuth]);

    return (
        <section className="bgGrey pizza">
            <div className="innerSection">
                { !authStatus ?
                    <div className="sectionNavigation">
                        {<PizzaNavigation/>}
                    </div> : null
                }
                <div className="sectionContent">
                    <Switch>
                        <Route path="/pizza/shop" component={Shop}/>
                        <PrivateRoute path="/pizza/list" component={List}/>
                        <PrivateRoute path="/pizza/history" component={OrderHistory}/>
                        <PrivateRoute path="/pizza/profile" component={Profile}/>
                        <Redirect exect from="/pizza" to="/pizza/shop"/>
                    </Switch>

                </div>
            </div>
        </section>
    );
};
