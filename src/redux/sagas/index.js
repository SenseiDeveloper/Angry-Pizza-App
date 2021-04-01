import { all } from "redux-saga/effects";

import {
    watchRegistrationUser,
    watchLoginUser,
    watchPizzaProducts,
    watchPizza,
    watchSavePizza,
    watchPizzaUser,
    watchSaveAddress,
    watchUserData,
    saveHistoryPizza,
    watchHistoryUser,
    watchEditPizza
} from "./watchers";

export default function* root() {
    yield all([
        watchRegistrationUser(),
        watchLoginUser(),
        watchPizza(),
        watchPizzaProducts(),
        watchSavePizza(),
        watchPizzaUser(),
        watchSaveAddress(),
        watchUserData(),
        saveHistoryPizza(),
        watchHistoryUser(),
        watchEditPizza()
    ]);
}
