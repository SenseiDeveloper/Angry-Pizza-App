import { put, call } from "redux-saga/effects";
import {setMessage} from '../action/messageAction';
import {registerUserSuccess,registerUserError, loginUserSuccess, loginUserError} from  '../action/authAction';
import {registerUser,loginUser} from '../../api/authAPI';

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
            yield console.log(response);
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
