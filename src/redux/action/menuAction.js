import typeActions from './types';

export const setStatusMenu = (status = true) => ({
    type: typeActions.SET_STATUS_MOBILE_MENU,
    payload: status
});

export const setStatusVerticalMenu = () => ({
    type: typeActions.SET_STATUS_VERTICAL_MOBILE_MENU,
});

export const closeVerticalMenu = () => ({
    type: typeActions.CLOSE_VERTICAL_MOBILE_MENU
});

export const setStatusBasketModal = () => ({
    type: typeActions.SET_STATUS_BASKET_MODAL
});
