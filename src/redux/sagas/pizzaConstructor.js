import {call, put} from "@redux-saga/core/effects";
import {loadProducts} from '../../api/authAPI';
import {getProductsSuccess,getProductsError} from '../action/pizzaConstructorAction';
import {setMessage} from "../action/messageAction";

export function* fetchPizzaProducts(action) {
    try{
        const response = yield call(() =>
            loadProducts(action.payload)
                .then(res => res.json())
        );
        yield put(getProductsSuccess(response));
    } catch (e) {
        yield put(getProductsError());
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}
