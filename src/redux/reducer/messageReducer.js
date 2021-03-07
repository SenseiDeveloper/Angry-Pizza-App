import typeActions from '../action/types';

const stateMessage = {
    message: '',
    status: '',
    show: false
};

export const messageReducer = ( state = stateMessage, action) => {
    switch (action.type) {
        case typeActions.SET_MESSAGE:
            return {
                message: action.payload.message,
                status: action.payload.status,
                show: true
            };
        case typeActions.CLEAR_MESSAGE:
            return {
                message: '',
                status: '',
                show: false
        };
        default:
            return state;
    }
};
