import {
    setStatusMenu,
    setStatusVerticalMenu,
    closeVerticalMenu,
    setStatusBasketModal
} from './menuAction';

import {
    fetchRegisterUser,
    registerUserSuccess,
    registerUserError,
    fetchLoginUser,
    loginUserSuccess,
    loginUserError,
    logoutUser
} from './authAction';

import {fetchPizzas,getPizzaSuccess,getPizzasError} from './pizzaAction';

import {
    fetchProducts,
    getProductsSuccess,
    getProductsError,
    setSelectBasis,
    setSelectProduct,
    countIncrementSelectProducts,
    countDecrementSelectProducts,
    removeSelectProduct
} from './pizzaConstructorAction';

import {clearMessage,setMessage} from './messageAction';

export default {
    setStatusMenu,
    setStatusVerticalMenu,
    closeVerticalMenu,
    setStatusBasketModal,
    fetchRegisterUser,
    registerUserSuccess,
    registerUserError,
    fetchLoginUser,
    loginUserSuccess,
    loginUserError,
    logoutUser,
    fetchPizzas,
    getPizzaSuccess,
    getPizzasError,
    fetchProducts,
    getProductsSuccess,
    getProductsError,
    setSelectBasis,
    setSelectProduct,
    countIncrementSelectProducts,
    countDecrementSelectProducts,
    removeSelectProduct,
    setMessage,
    clearMessage
}
