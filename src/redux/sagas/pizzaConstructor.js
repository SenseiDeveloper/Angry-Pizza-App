import {call, put,all} from "@redux-saga/core/effects";
import {loadProducts} from '../../api/publicAPI';
import {savePizzaConstructor} from '../../api/privateAPI';
import {getProductsSuccess,pizzaConstructorClean,getProductsError,setSelectBasis,setSelectProduct,editPizzaClean} from '../action/pizzaConstructorAction';
import {setMessage} from "../action/messageAction";

export function* fetchPizzaProducts(action) {
    try{
        const response = yield call(() =>
             loadProducts(action.payload)
                .then(res => res.json())
        );
        yield put(pizzaConstructorClean());
        yield put(getProductsSuccess(response));
    } catch (e) {
        yield put(getProductsError());
        yield put(setMessage({
            message: e.error,
            status: 'danger'
        }));
    }
}

export function* fetchEditPizzaProducts(action) {
    try{
       const response = yield call(() =>
            loadProducts(action.payload)
                .then(res => res.json())
        );
        yield put(pizzaConstructorClean());
        yield put(getProductsSuccess(response));
        yield put(setSelectBasis(action.payload.basis));
        yield all(action.payload.products.map(p => put(setSelectProduct(p))));
    }catch (e) {
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
