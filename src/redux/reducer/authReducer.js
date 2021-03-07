import typeActions from '../action/types';

const stateAuth = {
    token: localStorage.getItem('token'),
    isRegistered: false,
    isAuthenticated: false,
    user: null
};

export const authReducer = (state = stateAuth, action) => {
    switch (action.type) {
        case typeActions.AUTH_REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload
            };
        case typeActions.AUTH_REGISTER_ERROR:
            return {
                ...state,
                isRegistered: false,
                isAuthenticated: false,
                user: null
            };
        case typeActions.AUTH_LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            return {
                ...state,
                ...action.payload
            };
        case typeActions.AUTH_LOGIN_ERROR:
            return {
                ...state,
                isRegistered: false,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};
