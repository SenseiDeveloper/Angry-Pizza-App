import React from 'react';

import {SelectProduct} from './selectProduct';

export const OrderProducts = () => {
    return (
        <div className="orderProducts">
            <p className="productTitle">Основа</p>
            <p className="productTitle">Продукти</p>
            <SelectProduct />
        </div>
    );
};
