import {
    setStatusMenu,
    setStatusVerticalMenu,
    closeVerticalMenu,
    setStatusBasketModal
} from './menuAction';

import {
    fetchSaveUserAddress,
    saveUserAddress,
    loadUserData,
    setUserData,
    loadUserHistory,
    setUserHistory,
    errorUserHistory,
    updateDataUser
} from './userAction';

import {
    fetchRegisterUser,
    registerUserSuccess,
    registerUserError,
    fetchLoginUser,
    loginUserSuccess,
    loginUserError,
    logoutUser
} from './authAction';

import {
    fetchPizzas,
    fetchPizzaSuccess,
    fetchPizzasError,
    fetchUserPizzas,
    fetchUserPizzasSuccess,
    fetchUserPizzasError
} from './pizzaAction';

import {
    fetchProducts,
    getProductsSuccess,
    getProductsError,
    setSelectBasis,
    setSelectProduct,
    countIncrementSelectProducts,
    countDecrementSelectProducts,
    removeSelectProduct,
    savePizza,
    clearSelectProducts
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
    fetchUserPizzas,
    fetchUserPizzasSuccess,
    fetchUserPizzasError,
    fetchPizzaSuccess,
    fetchPizzasError,
    fetchProducts,
    getProductsSuccess,
    getProductsError,
    setSelectBasis,
    setSelectProduct,
    countIncrementSelectProducts,
    countDecrementSelectProducts,
    removeSelectProduct,
    clearSelectProducts,
    savePizza,
    setMessage,
    clearMessage,
    saveUserAddress,
    fetchSaveUserAddress,
    loadUserData,
    setUserData,
    loadUserHistory,
    setUserHistory,
    errorUserHistory,
    updateDataUser
}
