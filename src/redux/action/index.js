import {setStatusMenu,setStatusVerticalMenu} from './menuAction';

import {
    fetchRegisterUser,
    registerUserSuccess,
    registerUserError,
    fetchLoginUser,
    loginUserSuccess,
    loginUserError,
    logoutUser
} from './authAction'

import {
    fetchProducts,
    getProductsSuccess,
    getProductsError
} from './pizzaConstructorAction';

import {clearMessage,setMessage} from './messageAction';

export default {
    setStatusMenu,
    setStatusVerticalMenu,
    fetchRegisterUser,
    registerUserSuccess,
    registerUserError,
    fetchLoginUser,
    loginUserSuccess,
    loginUserError,
    logoutUser,
    fetchProducts,
    getProductsSuccess,
    getProductsError,
    setMessage,
    clearMessage
}
