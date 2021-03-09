import React from 'react';
import {useSelector} from "react-redux";

import {SelectProduct} from './selectProduct';
import {SelectBasis} from "./selectBasis";

export const OrderProducts = () => {
    const selectProducts = useSelector(state => state.pizzaConstructor.selectProducts);
    return (
        <div className="orderProducts">
            <p className="productTitle">Основа</p>
            {
                Object.entries(selectProducts.basis).length === 0 ?
                    <p>Ви не вибрали основу</p> :
                    <SelectBasis product={selectProducts.basis} typeProduct={'basis'}/>
            }
            <p className="productTitle">Продукти</p>
            {
                selectProducts.products.length === 0 ?
                    <p>Ви не вибрали продуктів</p> :
                    <SelectProduct products={selectProducts.products} typeProduct={'products'}/>
            }
        </div>
    );
};
