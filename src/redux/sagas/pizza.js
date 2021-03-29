import {call, put} from "@redux-saga/core/effects";
import {loadPizzas} from '../../api/publicAPI';
import {loadPizzaUser, saveHistory,loadHistory} from '../../api/privateAPI';
import {fetchPizzaSuccess, fetchPizzasError, fetchUserPizzasSuccess, fetchUserPizzasError} from '../action/pizzaAction';
import {setMessage} from "../action/messageAction";
import {setUserHistory} from '../action/userAction';

export function* fetchPizza() {
    try {
        const response = yield call(() =>
            loadPizzas()
                .then(res => res.json())
        );
        yield put(fetchPizzaSuccess(response));
    } catch (e) {
        yield put(fetchPizzasError());
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}

export function* fetchUserPizza(action) {
    const token = localStorage.getItem('token');
    try {
        const response = yield call(() =>
            loadPizzaUser(token, action.payload)
                .then(res => res.json())
        );
        yield put(fetchUserPizzasSuccess(response))
    } catch (e) {
        yield put(fetchUserPizzasError());
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}

export function* historyUser(action) {
    const token = localStorage.getItem('token');
    try {
        const response = yield call(()=>
            loadHistory(action.payload,token)
                .then(res => res.json())
        );
        yield put(setUserHistory(response));
    } catch (e) {
        yield put(fetchUserPizzasError());
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}

export function* saveHistoryUserPizza(action) {
    const token = localStorage.getItem('token');
    try {
        const responce = yield call(() =>
            saveHistory(action.payload, token)
                .then(res => res.json())
        );
        console.log(responce);
    } catch (e) {

    }
}
