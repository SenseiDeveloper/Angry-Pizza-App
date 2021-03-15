import typeActions from '../action/types';

const stateMenu = {
    mobileMenu: false,
    horizontalMenu: false,
    modalBasket: false
};

export const menuReducer = ( state = stateMenu, action) => {
    switch (action.type) {
        case typeActions.SET_STATUS_MOBILE_MENU:
            return {
                ...state,
                mobileMenu: action.payload
            };
        case typeActions.SET_STATUS_VERTICAL_MOBILE_MENU:
            return {
                ...state,
                horizontalMenu: !state.horizontalMenu
            };
        case typeActions.CLOSE_VERTICAL_MOBILE_MENU:
            return {
                ...state,
                horizontalMenu: false
            };
        case typeActions.SET_STATUS_BASKET_MODAL:
            return {
                ...state,
                modalBasket: !state.modalBasket
            };
        default: return state;
    }
};
