import { fork, all } from "redux-saga/effects";
import { appSaga } from "./appSaga";

export function* rootSaga() {
  yield all([fork(appSaga)]);
}
