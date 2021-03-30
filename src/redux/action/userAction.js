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

export const saveHistoryPizza = payload => ({
    type: typeActions.PIZZA_USER_SAVE_PIZZA_HISTORY,
    payload
});

export const loadUserHistory = payload => ({
    type: typeActions.USER_FETCH_HISTORY,
    payload
});

export const setUserHistory = payload => ({
    type: typeActions.USER_FETCH_HISTORY_SUCCESS,
    payload
});
export const errorUserHistory = () => ({
    type: typeActions.USER_FETCH_HISTORY_ERROR
});

export const updateDataUser = payload => ({
    type: typeActions.USER_UPDATE_DATA,
    payload
});
