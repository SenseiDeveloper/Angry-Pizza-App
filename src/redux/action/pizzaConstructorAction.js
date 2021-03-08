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
