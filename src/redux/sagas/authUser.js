import { put, call } from "redux-saga/effects";
import {setMessage} from '../action/messageAction';
import {
    registerUserSuccess,
    registerUserError,
    loginUserSuccess,
    loginUserError
} from  '../action/authAction';

import {saveUserAddress,setUserData} from '../action/userAction';
import {registerUser, loginUser} from '../../api/authAPI';
import {saveAddress, getUserData} from '../../api/privateAPI';

export function* fetchRegistrationUser(action) {
    try{
        const response = yield call(() =>
            registerUser(action.payload)
                .then(res => res.json())
        );
        if(response.isRegistered){
            yield put(registerUserSuccess(response));
            yield put(setMessage({
                message: 'Ви успішно зареєструвались',
                status: 'success'
            }));
        } else {
            yield put(registerUserError());
            yield put(setMessage({
                message: 'Номер телефону уже зареєстрований',
                status: 'info'
            }));
        }

    } catch (e) {
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}

export function* fetchLoginUser(action) {
    try{
        const response = yield call(() =>
            loginUser(action.payload)
                .then(res => res.json())
        );
        if (response.isAuthenticated){
            yield put(loginUserSuccess(response));
        }else {
            yield put(loginUserError());
            yield put(setMessage({
                message: 'Невірний логін або пароль',
                status: 'danger'
            }))
        }
    } catch (e) {
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}

export function* fetchSaveAddress(action) {
    const token = localStorage.getItem('token');
    try{
        const response = yield call(() =>
            saveAddress(action.payload,token)
                .then(res => res.json())
        );
        localStorage.setItem('user', JSON.stringify(response));
        yield put(saveUserAddress(response));
        yield put(setMessage({
            message: 'Ви зберегли адрессу',
            status: 'success'
        }));
    }catch (e) {
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}

export function* fetchUserData(action) {
    const token = localStorage.getItem('token');
    try{
        const response = yield call(() =>
            getUserData(token,action.payload)
                .then(res => res.json())
        );
        yield put(setUserData(response));
    }catch (e) {
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}
