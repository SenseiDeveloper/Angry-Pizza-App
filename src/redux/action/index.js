import {setStatusMenu} from './menuAction';
import {setStatusVerticalMenu} from './menuAction';

import {registerUser} from './authAction'
import {registerUserSuccess} from './authAction';
import {registerUserError} from './authAction';

import {setMessage} from './messageAction';
import {clearMessage} from './messageAction';

export default {
    setStatusMenu,
    setStatusVerticalMenu,
    registerUser,
    registerUserSuccess,
    registerUserError,
    setMessage,
    clearMessage
}
