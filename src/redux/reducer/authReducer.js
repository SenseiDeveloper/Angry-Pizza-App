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
        case typeActions.AUTH_LOGOUT_USER:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                token: localStorage.getItem('token'),
                isRegistered: false,
                isAuthenticated: false,
                user: null
        };
        case typeActions.USER_SAVE_ADDRESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case typeActions.USER_LOAD_DATA_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case typeActions.USER_UPDATE_DATA:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        default:
            return state;
    }
};
