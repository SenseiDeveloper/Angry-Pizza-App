import React from 'react';
import {useDispatch} from "react-redux";
import action from '../../../redux/action/index';

export const ProductPizza = ({product}) => {
    const dispatch = useDispatch();

    const handleProduct = (prod) => {
        if(!prod.select){
            prod.select = true;
            if(prod.hasOwnProperty('count')){
                dispatch(action.setSelectProduct(prod));
            }else {
                dispatch(action.setSelectBasis(prod));
            }
        }
    };

    return (
        <ul>
            {
                product && product.map( prod =>
                    <li className={prod.select ? 'active': ''} key={prod.id} onClick={() => handleProduct(prod)}>
                        <div className="icon">
                            <img src={process.env.PUBLIC_URL + prod.icon} alt={prod.name}/>
                        </div>
                        <p>{prod.name}</p>
                    </li>
                )
            }
        </ul>
    );
};
