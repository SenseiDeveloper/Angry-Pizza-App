import typeActions from '../action/types';
import {modifyProducts} from '../../helpers/products';

const statePizzaConstructor = {
    products: {
        data: {},
        loading: false
    },
    selectProducts: {
        basis: {},
        products: []
    }
};

export const pizzaConstructorReducer = ( state = statePizzaConstructor, action) => {
    switch (action.type) {
        case typeActions.PIZZA_CONSTRUCTOR_FETCH_PRODUCTS:
            return{
                ...state,
                products: {
                    data: {},
                    loading: false
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: {
                    data: modifyProducts(action.payload),
                    loading: true
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_PRODUCTS_ERROR:
            return{
                ...state,
                products: {
                    data: {},
                    loading: false
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_SELECT_BASIS:
            return {
                products: {
                    ...state.products,
                    data: {
                        basis: [...state.products.data.basis,action.payload],
                        ...state.products.data
                    }
                },
                selectProducts: {
                    ...state.selectProducts,
                    basis: action.payload
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_SELECT_PRODUCT:
            return {
                products: {
                    ...state.products,
                    data: {
                        [action.payload.type]: [...state.products.data.basis,action.payload],
                        ...state.products.data
                    }
                },
                selectProducts: {
                    ...state.selectProducts,
                    products: [...state.selectProducts.products,action.payload]
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_REMOVE_SELECT_PRODUCT:
            return {
                products: {
                    ...state.products,
                    data: {
                        [action.payload.type]: [...state.products.data.basis,action.payload],
                        ...state.products.data
                    }
                },
                selectProducts: {
                    ...state.selectProducts,
                    products: state.selectProducts.products.filter( p => p.id !== action.payload.id)
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_INCREMENT_SELECT_PRODUCT:
            return {
                ...state,
                selectProducts: {
                    ...state.selectProducts,
                    products: state.selectProducts.products.map( p => {
                        if(p.id === action.payload.id){
                            return action.payload;
                        }
                        return p;
                    })
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_DECREMENT_SELECT_PRODUCT:
            return {
                ...state,
                selectProducts: {
                    ...state.selectProducts,
                    products: state.selectProducts.products.map(p => {
                        if (p.id === action.payload.id) {
                            return action.payload;
                        }
                        return p;
                    })
                }
            };
        default:
            return state;
    }
};
