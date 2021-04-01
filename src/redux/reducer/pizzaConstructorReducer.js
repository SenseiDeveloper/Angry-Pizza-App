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
    },
    editPizza: {}
};

export const pizzaConstructorReducer = ( state = statePizzaConstructor, action) => {
    switch (action.type) {
        case typeActions.PIZZA_CONSTRUCTOR_CLEAN:
            return {
                products: {
                    data: {},
                    loading: false
                },
                selectProducts: {
                    basis: {},
                    products: []
                },
                editPizza: {}
            };
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
        case typeActions.PIZZA_CONSTRUCTOR_CLEAR_SELECT:
            return {
                ...state,
                selectProducts: {
                    basis: {},
                    products: []
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_SELECT_BASIS:
            return {
                ...state,
                products: {
                    ...state.products,
                    data: {
                        ...state.products.data,
                        basis:state.products.data.basis.map(b => {
                            if(b.id === action.payload.id){
                                b.select = true;
                                return b;
                            }
                            return b;
                        })
                    }
                },
                selectProducts: {
                    ...state.selectProducts,
                    basis: action.payload
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_SELECT_PRODUCT:
            return {
                ...state,
                products: {
                    ...state.products,
                    data: {
                        ...state.products.data,
                        [action.payload.type]: state.products.data[action.payload.type].map( p => {
                            if(p.id === action.payload.id){
                                p.select = true;
                                return p;
                            }
                            return p;
                        })
                    }
                },
                selectProducts: {
                    ...state.selectProducts,
                    products: [...state.selectProducts.products,action.payload]
                }
            };
        case typeActions.PIZZA_CONSTRUCTOR_REMOVE_SELECT_PRODUCT:
            return {
                ...state,
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
        case typeActions.PIZZA_CONSTRUCTOR_EDIT_PIZZA:
            return {
                ...state,
                editPizza: action.payload
            };
        default:
            return state;
    }
};
