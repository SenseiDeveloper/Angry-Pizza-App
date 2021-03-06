import typeActions from './types';

export const registerUser = payload => ({
    type: typeActions.FETCH_REGISTER_USER,
    payload
});

export const registerUserSuccess = () => ({
    type: typeActions.REGISTER_USER_SUCCESS,
    payload: true
});

export const registerUserError = () => ({
    type: typeActions.REGISTER_USER_ERROR,
    payload: false
});
