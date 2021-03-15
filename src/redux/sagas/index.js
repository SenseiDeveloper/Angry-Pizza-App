import { all } from "redux-saga/effects";

import {
    watchRegistrationUser,
    watchLoginUser,
    watchPizzaProducts,
    watchPizza
} from "./watchers";

export default function* root() {
    yield all([
        watchRegistrationUser(),
        watchLoginUser(),
        watchPizza(),
        watchPizzaProducts()
    ]);
}
