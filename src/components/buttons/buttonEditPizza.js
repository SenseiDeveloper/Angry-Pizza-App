import React from 'react';
import { useHistory } from "react-router-dom";
import {isUserLogged} from '../../helpers/auth';
import {BiEdit} from 'react-icons/bi';
import {useDispatch} from "react-redux";
import {editPizza} from '../../redux/action/pizzaConstructorAction';

export const ButtonEditPizza = ({pizza}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRedirect = () => {
        const modifyBasis = {...pizza.products.basis,select:true};
        const modifyProducts = pizza.products.products.map(p => {
            return{
                ...p,
                select:true
            }
        });
        const modifyPizza = {
            basis: modifyBasis,
            products: modifyProducts,
            name: pizza.name
        };
        dispatch(editPizza(modifyPizza));
        history.push('/pizza-constructor');
    };

    return (
        <>
            {
                isUserLogged() ?
                    <button className="btn btn-primary" onClick={()=> handleRedirect()}><BiEdit /></button> : null
            }
        </>
    );
};
