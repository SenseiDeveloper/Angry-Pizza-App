import typeActions from '../action/types';

const statePizzas = {
    pizzas: [],
    loading: false
};

export const pizzaReducer = (state = statePizzas, action) => {
    switch (action.type) {
        case typeActions.PIZZA_FETCH:
            return {
                pizzas: [],
                loading: false
            };
        case typeActions.PIZZA_FETCH_SUCCESS:
            return {
                pizzas: action.payload,
                loading: true
            };
        case typeActions.PIZZA_FETCH_ERROR:
            return {
                pizzas: [],
                loading: false
            };
        default:
            return state;
    }
};
