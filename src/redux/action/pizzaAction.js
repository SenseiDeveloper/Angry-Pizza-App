import typeActions from './types';

export const fetchPizzas = () => ({
    type: typeActions.PIZZA_FETCH,
});

export const getPizzaSuccess = payload => ({
    type: typeActions.PIZZA_FETCH_SUCCESS,
    payload
});

export const getPizzasError = () => ({
    type: typeActions.PIZZA_FETCH_ERROR,
});
