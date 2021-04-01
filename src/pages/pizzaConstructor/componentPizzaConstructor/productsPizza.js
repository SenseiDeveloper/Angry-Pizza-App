import React,{useState} from 'react';
import {useSelector} from "react-redux";

import {Loader} from '../../../components/loader/loader';
import {ProductPizza} from './productPizza';
import {GiFullPizza} from 'react-icons/gi';
import {GiCheeseWedge} from 'react-icons/gi';
import {GiMeat} from 'react-icons/gi';
import {GiFruitBowl} from 'react-icons/gi';

export const ProductsPizza = () => {
    const [stateAccordion, setStateAccordion] = useState({
        basis: true,
        cheese: false,
        meat: false,
        vegetable: false
    });
    const productsStore = useSelector(state => state.pizzaConstructor.products.data);
    const loader = useSelector(state => state.pizzaConstructor.products.loading);

    const handleChangeAccordion = (type) => {
        const prevState = Object.assign(stateAccordion);
        for (let property in prevState){
            prevState[property] = false;
        }
        setStateAccordion({
            ...prevState,
            [type]: true
        });
    };

    return(
        <div className="productsPizza">
            {
                loader ?
                    <>
                        <div className="accordion">
                            <div className="item">
                                <div
                                    onClick={()=> handleChangeAccordion('basis')}
                                    className={`title ${stateAccordion.basis ? 'active': ''}`}>
                                    <p><GiFullPizza /> Основа</p>
                                </div>
                                {
                                    stateAccordion.basis ?
                                    <div className="text">
                                        <ProductPizza product={productsStore.basis} />
                                    </div> : null
                                }
                            </div>

                            <div className="item">
                                <div
                                    onClick={()=> handleChangeAccordion('cheese')}
                                    className={`title ${stateAccordion.cheese ? 'active': ''}`}>
                                    <p><GiCheeseWedge /> Сири</p>
                                </div>
                                {
                                    stateAccordion.cheese ?
                                        <div className="text">
                                            <ProductPizza product={productsStore.cheeses}/>
                                        </div> : null
                                }
                            </div>

                            <div className="item">
                                <div
                                    onClick={()=> handleChangeAccordion('meat')}
                                    className={`title ${stateAccordion.meat ? 'active': ''}`}>
                                    <p><GiMeat /> Мясо та морепродукти</p>
                                </div>
                                {
                                    stateAccordion.meat ?
                                        <div className="text">
                                            <ProductPizza product={productsStore.meat} />
                                        </div> : null
                                }
                            </div>
                            <div className="item">
                                <div
                                    onClick={()=> handleChangeAccordion('vegetable')}
                                    className={`title ${stateAccordion.vegetable ? 'active': ''}`}>
                                    <p><GiFruitBowl /> Овочі та фрукти</p>
                                </div>
                                {
                                    stateAccordion.vegetable ?
                                        <div className="text">
                                            <ProductPizza product={productsStore.anyProducts} />
                                        </div> : null
                                }
                            </div>
                        </div>
                    </>
                    : <Loader />
            }
        </div>
    );
};
