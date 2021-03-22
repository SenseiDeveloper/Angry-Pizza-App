import {call, put} from "@redux-saga/core/effects";
import {loadPizzas,loadPizzaUser} from '../../api/authAPI';
import {fetchPizzaSuccess,fetchPizzasError,fetchUserPizzasSuccess,fetchUserPizzasError} from '../action/pizzaAction';
import {setMessage} from "../action/messageAction";

export function* fetchPizza() {
    try {
        const response = yield call( () =>
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
    try{
        const response = yield call(() =>
            loadPizzaUser(token,action.payload)
                .then(res => res.json())
        );
        yield put(fetchUserPizzasSuccess(response))
    }catch (e) {
        yield put(fetchUserPizzasError());
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}
