import typeActions from '../action/types';

const stateAuth = {
    isRegistered: false
};

export const authReducer = (state = stateAuth, action) => {
    switch (action.type) {
        case typeActions.REGISTER_USER_SUCCESS:
            return { isRegistered: true };
        case typeActions.REGISTER_USER_ERROR:
            return { isRegistered: false };
        default:
            return state;
    }
};
