import { put, call } from "redux-saga/effects";
import {setMessage} from '../action/messageAction';
import {registerUserSuccess,registerUserError} from  '../action/authAction';
import {registerUser} from '../../api/authAPI';

export function* fetchRegistrationUser(action) {
    try{
        const response = yield call(() =>
            registerUser(action.payload)
                .then(res => res.json())
        );
        if ( response.status === 'success'){
            yield put(setMessage(response));
            yield put(registerUserSuccess());
        }
        yield put(setMessage(response));
        yield put(registerUserError());
    } catch (e) {
        yield put(setMessage(e));
    }
}
