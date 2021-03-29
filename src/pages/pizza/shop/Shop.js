import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux";

import {ButtonConstructor} from '../../../components/buttons/buttonConstructor';
import {PizzaItem} from './pizzaItem';
import {Loader} from "../../../components/loader/loader";
import {Pagination} from '../../../components/pagination';
import {SearchPizzaInput} from '../../../components/searchPizzaInput';
import {PizzaDone} from './pizzaDone';

export const Shop = () => {
    const [pizzaState, setPizzaState] = useState([]);
    const [searchMess, setSearchMess] = useState('');
    const pizzaArray = useSelector(state => state.pizza);
    const pizzaBar = JSON.parse(localStorage.getItem('pizza-done'));

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

    const handleSearchField = (item) => {
        if (typeof item === "string"){
            setSearchMess(item);
        }else if(item === 0) {
            setSearchMess('');
            setPizzaState(initItem());
        }else {
            setSearchMess('');
            setPizzaState(item);
        }
    };

    useEffect(() => {
        setPizzaState(initItem());
    },[pizzaArray.pizzas]);

    return (
        <div className="pizzaShop">
            <ButtonConstructor />
            {
                !pizzaBar ?
                    null:
                    pizzaBar.map(p =>
                        <PizzaDone key={p.time} pizza={p}/>
                    )
            }
            <SearchPizzaInput
                pizzaArray={pizzaArray.pizzas}
                handleSearchField={handleSearchField}
            />
            {
                pizzaArray && pizzaArray.loading ?
                    <>
                        {
                            searchMess && searchMess.length !== 0 ?
                                <p>{searchMess}</p>
                                :
                                <ul>
                                    {
                                        pizzaState.map(pizza =>
                                            <PizzaItem key={pizza.id} pizza={pizza}/>
                                        )
                                    }
                                </ul>
                        }
                        {
                            searchMess && searchMess.length !== 0 ?
                                null: pizzaState.length < 5 ?
                                null: <Pagination
                                    pizzas = {pizzaArray.pizzas}
                                    handleChangeItem={handleChangeItem}/>
                        }
                    </>
                    : <Loader/>
            }
        </div>
    );
};
