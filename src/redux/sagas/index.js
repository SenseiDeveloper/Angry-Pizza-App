import { all } from "redux-saga/effects";
import { watchRegistrationUser } from "./watchers";
import {watchLoginUser} from "./watchers";

export default function* root() {
    yield all([
        watchRegistrationUser(),
        watchLoginUser()
    ]);
}
