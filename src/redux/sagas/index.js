import { all } from "redux-saga/effects";

import {
    watchRegistrationUser,
    watchLoginUser,
    watchPizzaProducts
} from "./watchers";

export default function* root() {
    yield all([
        watchRegistrationUser(),
        watchLoginUser(),
        watchPizzaProducts()
    ]);
}
