import { all } from "redux-saga/effects";
import { watchRegistrationUser } from "./watchers";

export default function* root() {
    yield all([
        watchRegistrationUser()
    ]);
}
