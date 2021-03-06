import { takeEvery } from "redux-saga/effects";
import actionTypes from '../action/types';
import {fetchRegistrationUser} from './authUser';

export function* watchRegistrationUser() {
    yield takeEvery(actionTypes.FETCH_REGISTER_USER, fetchRegistrationUser)
}
