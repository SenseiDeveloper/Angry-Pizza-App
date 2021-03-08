import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchProducts} from '../../redux/action/pizzaConstructorAction';
import {Loader} from '../loader/loader';
import {ProductPizza} from './productPizza';

export const ProductsPizza = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.pizzaConstructor.products.data);
    const loader = useSelector(state => state.pizzaConstructor.products.loading);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);

    return(
        <div className="productsPizza">
            {
                loader ?
                    <>
                        <p className="productTitle">Основа</p>
                        <ProductPizza product={products.basis}/>
                        <p className="productTitle">Сири</p>
                        <ProductPizza product={products.cheeses}/>
                        <p className="productTitle">Мясо та морепродукти</p>
                        <ProductPizza product={products.meat}/>
                        <p className="productTitle">Овочі та фрукти</p>
                        <ProductPizza product={products.anyProducts}/>
                    </>
                    : <Loader />
            }
        </div>
    );
};
