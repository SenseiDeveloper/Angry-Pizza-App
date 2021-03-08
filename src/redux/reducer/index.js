import { combineReducers } from 'redux';
import {menuReducer} from './menuReducer';
import {authReducer} from './authReducer';
import {messageReducer} from './messageReducer';
import {pizzaConstructorReducer} from './pizzaConstructorReducer';

export default combineReducers({
    menu: menuReducer,
    auth: authReducer,
    message: messageReducer,
    pizzaConstructor: pizzaConstructorReducer
});
