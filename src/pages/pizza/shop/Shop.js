import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";

import {ButtonConstructor} from '../../../components/buttons/buttonConstructor';
import {PizzaItem} from './pizzaItem';
import {Loader} from "../../../components/loader/loader";
import {Pagination} from '../../../components/pagination';

export const Shop = () => {
    const [pizzaState, setPizzaState] = useState([]);
    const pizzaArray = useSelector(state => state.pizza);

    const initItem = () => {
        const result = [];
        for (let i = 0; i < pizzaArray.pizzas.length; i++){
            if (i > 4) break;
            result.push(pizzaArray.pizzas[i]);
        }
        return result;
    };

    const handleChangeItem = (items) => {
        setPizzaState(items);
    };

    useEffect(() => {
        setPizzaState(initItem());
    },[pizzaArray.pizzas]);

    return (
        <div className="pizzaShop">
            <ButtonConstructor/>
            <input type="text" placeholder='Знайти піцу'/>
            {
                pizzaArray && pizzaArray.loading ?
                    <>
                        <ul>
                            {
                                 pizzaState.map(pizza =>
                                    <PizzaItem key={pizza.id} pizza={pizza}/>
                                )
                            }
                        </ul>
                        <Pagination
                            pizzas = {pizzaArray.pizzas}
                            handleChangeItem={handleChangeItem}/>
                    </>
                    : <Loader/>
            }
        </div>
    );
};
