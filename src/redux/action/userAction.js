import typeActions from './types';

export const loadUserData = payload => ({
    type: typeActions.USER_LOAD_DATA,
    payload
});

export const setUserData = payload => ({
    type: typeActions.USER_LOAD_DATA_SUCCESS,
    payload
});
export const fetchSaveUserAddress = payload => ({
    type: typeActions.USER_FETCH_SAVE_ADDRESS,
    payload
});

export const saveUserAddress = payload => ({
    type: typeActions.USER_SAVE_ADDRESS,
    payload
});
