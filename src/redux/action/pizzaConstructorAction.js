import typeActions from "./types";

export const fetchProducts = () => ({
    type: typeActions.PIZZA_CONSTRUCTOR_FETCH_PRODUCTS,
});

export const getProductsSuccess = payload => ({
    type: typeActions.PIZZA_CONSTRUCTOR_PRODUCTS_SUCCESS,
    payload
});

export const getProductsError = () => ({
    type: typeActions.PIZZA_CONSTRUCTOR_PRODUCTS_ERROR,
});

export const setSelectBasis = payload => ({
    type: typeActions.PIZZA_CONSTRUCTOR_SELECT_BASIS,
    payload
});

export const setSelectProduct = payload => ({
    type: typeActions.PIZZA_CONSTRUCTOR_SELECT_PRODUCT,
    payload
});

export const removeSelectProduct = payload => ({
    type: typeActions.PIZZA_CONSTRUCTOR_REMOVE_SELECT_PRODUCT,
    payload
});

export const countIncrementSelectProducts = payload => ({
    type: typeActions.PIZZA_CONSTRUCTOR_INCREMENT_SELECT_PRODUCT,
    payload
});

export const countDecrementSelectProducts = payload => ({
    type: typeActions.PIZZA_CONSTRUCTOR_DECREMENT_SELECT_PRODUCT,
    payload
});

export const savePizza = payload => ({
    type: typeActions.PIZZA_CONSTRUCTOR_SAVE_PIZZA,
    payload
});
