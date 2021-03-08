import { takeEvery } from "redux-saga/effects";
import actionTypes from '../action/types';
import {fetchRegistrationUser,fetchLoginUser} from './authUser';
import {fetchPizzaProducts} from './pizzaConstructor';

export function* watchRegistrationUser() {
    yield takeEvery(actionTypes.AUTH_FETCH_REGISTER_USER, fetchRegistrationUser);
}

export function* watchLoginUser() {
    yield takeEvery(actionTypes.AUTH_FETCH_LOGIN_USER, fetchLoginUser);
}

export function* watchPizzaProducts() {
    yield takeEvery(actionTypes.PIZZA_CONSTRUCTOR_FETCH_PRODUCTS, fetchPizzaProducts);
}
