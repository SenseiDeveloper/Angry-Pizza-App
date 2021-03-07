import { takeEvery } from "redux-saga/effects";
import actionTypes from '../action/types';
import {fetchRegistrationUser} from './authUser';
import {fetchLoginUser} from './authUser';

export function* watchRegistrationUser() {
    yield takeEvery(actionTypes.AUTH_FETCH_REGISTER_USER, fetchRegistrationUser);
}

export function* watchLoginUser() {
    yield takeEvery(actionTypes.AUTH_FETCH_LOGIN_USER, fetchLoginUser);
}
