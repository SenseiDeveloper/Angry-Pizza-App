import typeActions from '../action/types';

const statePizzaConstructor = {
    products: {
        data: {},
        loading: false
    },
    selectProducts: []
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
                    data: action.payload,
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
        default:
            return state;
    }
};
