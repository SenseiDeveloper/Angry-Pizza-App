import typeActions from './types';

export const fetchPizzas = () => ({
    type: typeActions.PIZZA_FETCH,
});

export const fetchPizzaSuccess = payload => ({
    type: typeActions.PIZZA_FETCH_SUCCESS,
    payload
});

export const fetchPizzasError = () => ({
    type: typeActions.PIZZA_FETCH_ERROR,
});

export const fetchUserPizzas = payload => ({
    type: typeActions.PIZZA_USER_FETCH,
    payload
});

export const fetchUserPizzasSuccess = payload => ({
    type: typeActions.PIZZA_USER_FETCH_SUCCESS,
    payload
});
export const fetchUserPizzasError = () => ({
    type: typeActions.PIZZA_USER_FETCH_ERROR,
});
