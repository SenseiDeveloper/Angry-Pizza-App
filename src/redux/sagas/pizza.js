import {call, put} from "@redux-saga/core/effects";
import {loadPizzas} from '../../api/authAPI';
import {getPizzaSuccess,getPizzasError} from '../action/pizzaAction';
import {setMessage} from "../action/messageAction";

export function* fetchPizza() {
    try {
        const response = yield call( () =>
            loadPizzas()
                .then(res => res.json())
        );
        yield put(getPizzaSuccess(response));
    } catch (e) {
        yield put(getPizzasError());
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}
