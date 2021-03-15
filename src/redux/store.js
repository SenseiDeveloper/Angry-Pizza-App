import { createStore,compose, applyMiddleware } from 'redux';
import reducer from './reducer/index';
import createSaga from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSaga();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(sagaMiddleware))
    );

sagaMiddleware.run(rootSaga);
