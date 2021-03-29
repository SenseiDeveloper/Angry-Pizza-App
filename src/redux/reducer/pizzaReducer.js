import typeActions from '../action/types';

const statePizzas = {
    pizzas: [],
    pizzasUser: [],
    pizzaHistory: [],
    loadingHistory: false,
    loadingUserPizza: false,
    loading: false
};

export const pizzaReducer = (state = statePizzas, action) => {
    switch (action.type) {
        case typeActions.PIZZA_FETCH:
            return {
                ...state,
                pizzas: [],
                loading: false
            };
        case typeActions.PIZZA_FETCH_SUCCESS:
            return {
                ...state,
                pizzas: action.payload,
                loading: true
            };
        case typeActions.PIZZA_FETCH_ERROR:
            return {
                ...state,
                pizzas: [],
                loading: false
            };
        case typeActions.PIZZA_USER_FETCH:
            return {
                ...state,
                pizzasUser: [],
                loadingUserPizza: false
            };
        case typeActions.PIZZA_USER_FETCH_SUCCESS:
            return {
                ...state,
                pizzasUser: action.payload,
                loadingUserPizza: true
            };
        case typeActions.PIZZA_USER_FETCH_ERROR:
            return {
                ...state,
                pizzasUser: [],
                loadingUserPizza: false
            };
        case typeActions.USER_FETCH_HISTORY:
            return {
                ...state,
                pizzaHistory: [],
                loadingHistory: false,
            };
        case typeActions.USER_FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                pizzaHistory: [action.payload],
                loadingHistory: true,
            };
        case typeActions.USER_FETCH_HISTORY_ERROR:
            return {
                ...state,
                pizzaHistory: [],
                loadingHistory: false,
            };
        default:
            return state;
    }
};
