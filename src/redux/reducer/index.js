import { combineReducers } from 'redux';
import {menuReducer} from './menuReducer';
import {authReducer} from './authReducer';
import {messageReducer} from './messageReducer';
import {pizzaConstructorReducer} from './pizzaConstructorReducer';
import {pizzaReducer} from './pizzaReducer';

export default combineReducers({
    menu: menuReducer,
    auth: authReducer,
    message: messageReducer,
    pizza: pizzaReducer,
    pizzaConstructor: pizzaConstructorReducer
});
