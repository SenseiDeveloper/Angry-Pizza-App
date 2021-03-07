import typeActions from './types';

export const fetchRegisterUser = payload => ({
    type: typeActions.AUTH_FETCH_REGISTER_USER,
    payload
});

export const registerUserSuccess = payload => ({
    type: typeActions.AUTH_REGISTER_SUCCESS,
    payload
});

export const registerUserError = () => ({
    type: typeActions.AUTH_REGISTER_ERROR
});

export const fetchLoginUser = payload => ({
    type: typeActions.AUTH_FETCH_LOGIN_USER,
    payload
});


export const loginUserSuccess = payload => ({
    type: typeActions.AUTH_LOGIN_SUCCESS,
    payload
});

export const loginUserError = () => ({
    type: typeActions.AUTH_LOGIN_ERROR
});
