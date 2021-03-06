import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/index';
import createSaga from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSaga();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    );
//store.subscribe(() => console.info(store.getState()));
sagaMiddleware.run(rootSaga);
