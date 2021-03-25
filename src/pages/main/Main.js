import React,{useRef} from 'react';
import './Main.scss';
import {Switch,Route,Redirect} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import {appRoutes} from "../../routes/appRoutes";
import {useSelector} from "react-redux";

import {Home} from '../../pages/home/Home';
import {Pizza} from "../../pages/pizza/Pizza";
import {Info} from "../../pages/info/Info";
import {Promotions} from "../../pages/promotions/Promotions";
import {Auth} from "../../pages/auth/Auth";
import {PizzaConstructor} from "../../pages/pizzaConstructor/PizzaConstructor";
import {ModalBasket} from '../../components/modal/modalBasket';
import {Order} from "../order/Order";

const components = {
    Home,Pizza,Info,Promotions,Auth,PizzaConstructor,Order
};

export const Main = () => {
    const statusModalBasket = useSelector(state => state.menu.modalBasket);
    const nodeRef = useRef(null);

    return (
        <>
            <Switch>
                {
                    appRoutes.map( route =>
                        <Route path={route.path} key={route.path} component={components[route.component]}/>
                    )
                }
                <Redirect exect from="/" to="/home"/>
            </Switch>
            <CSSTransition
                nodeRef={nodeRef}
                in={statusModalBasket}
                timeout={300}
                classNames="basket"
                unmountOnExit
            >
                < ModalBasket/>
            </CSSTransition>
        </>
    );
};
