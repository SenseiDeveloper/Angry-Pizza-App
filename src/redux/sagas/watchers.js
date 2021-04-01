import { takeEvery } from "redux-saga/effects";
import actionTypes from '../action/types';
import {fetchRegistrationUser,fetchLoginUser,fetchSaveAddress,fetchUserData} from './authUser';
import {fetchPizzaProducts,savePizza,fetchEditPizzaProducts} from './pizzaConstructor';
import {fetchPizza,fetchUserPizza,saveHistoryUserPizza,historyUser} from './pizza';

export function* watchRegistrationUser() {
    yield takeEvery(actionTypes.AUTH_FETCH_REGISTER_USER, fetchRegistrationUser);
}

export function* watchLoginUser() {
    yield takeEvery(actionTypes.AUTH_FETCH_LOGIN_USER, fetchLoginUser);
}

export function* watchPizzaProducts() {
    yield takeEvery(actionTypes.PIZZA_CONSTRUCTOR_FETCH_PRODUCTS, fetchPizzaProducts);
}

export function* watchPizza() {
    yield takeEvery(actionTypes.PIZZA_FETCH, fetchPizza)
}

export function* watchSavePizza() {
    yield takeEvery(actionTypes.PIZZA_CONSTRUCTOR_SAVE_PIZZA, savePizza)
}

export function* watchPizzaUser() {
    yield takeEvery(actionTypes.PIZZA_USER_FETCH, fetchUserPizza);
}

export function* watchSaveAddress() {
    yield takeEvery(actionTypes.USER_FETCH_SAVE_ADDRESS, fetchSaveAddress)
}

export function* watchUserData() {
    yield takeEvery(actionTypes.USER_LOAD_DATA, fetchUserData)
}

export function* watchHistoryUser() {
    yield  takeEvery(actionTypes.USER_FETCH_HISTORY, historyUser)
}

export function* saveHistoryPizza() {
    yield takeEvery(actionTypes.PIZZA_USER_SAVE_PIZZA_HISTORY, saveHistoryUserPizza)
}

export  function* watchEditPizza() {
    yield takeEvery(actionTypes.PIZZA_CONSTRUCTOR_EDIT_PIZZA_FETCH, fetchEditPizzaProducts)
}
