import {call, put} from "@redux-saga/core/effects";
import {loadProducts,savePizzaConstructor} from '../../api/authAPI';
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

export function* savePizza(action) {
    const token = localStorage.getItem('token');
    try {
        const response = yield call(() =>
            savePizzaConstructor(action.payload,token)
                .then(res => res.json())
        );
        if(!response.hasOwnProperty('msg')){
            yield put(setMessage({
                message: `Ви зберегли піцу: "${response.name}"`,
                status: 'success'
            }));
        } else {
            yield put(setMessage({
                message: response.msg,
                status: 'danger'
            }));
        }

    }catch (e) {
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}
