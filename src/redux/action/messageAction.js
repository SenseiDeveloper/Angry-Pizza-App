import typeActions from './types';

export const setMessage = payload => ({
    type: typeActions.SET_MESSAGE,
    payload
});

export const clearMessage = () => ({
    type: typeActions.CLEAR_MESSAGE
});
