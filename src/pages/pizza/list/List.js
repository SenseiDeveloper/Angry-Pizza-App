import React,{useEffect} from 'react';
import {ButtonConstructor} from "../../../components/buttons/buttonConstructor";
import {useDispatch, useSelector} from "react-redux";

import {fetchUserPizzas} from '../../../redux/action/pizzaAction';
import {Loader} from "../../../components/loader/loader";
import {PizzaItem} from '../shop/pizzaItem';

export const List = () => {
    const dispatch = useDispatch();
    const userPizzas = useSelector(state => state.pizza);

    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem('user')).id;
        dispatch(fetchUserPizzas(user));
    },[]);

    return (
        <div className="pizzaShop">
            <h3>Мої піци:</h3>
            <ButtonConstructor />
            {
                userPizzas && userPizzas.loadingUserPizza ?
                    <>
                        {
                            userPizzas && userPizzas.pizzasUser.length !== 0 ?
                                <ul id="myPizza">
                                    {
                                         userPizzas.pizzasUser.map( pizza =>
                                            <PizzaItem key={pizza.id} pizza={pizza}/>
                                        )
                                    }
                                </ul>
                                :
                                <p>У вас немає створених піц</p>
                        }
                    </>
                    : <Loader/>
            }
        </div>
    );
};
