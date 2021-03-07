import {setStatusMenu} from './menuAction';
import {setStatusVerticalMenu} from './menuAction';

import {fetchRegisterUser} from './authAction'
import {registerUserSuccess} from './authAction';
import {registerUserError} from './authAction';
import {fetchLoginUser} from './authAction';
import {loginUserSuccess} from './authAction';
import {loginUserError} from './authAction';
import {logoutUser} from './authAction';

import {setMessage} from './messageAction';
import {clearMessage} from './messageAction';

export default {
    setStatusMenu,
    setStatusVerticalMenu,
    fetchRegisterUser,
    registerUserSuccess,
    registerUserError,
    fetchLoginUser,
    loginUserSuccess,
    loginUserError,
    logoutUser,
    setMessage,
    clearMessage
}
