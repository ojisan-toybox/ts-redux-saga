import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "../modules/app";

function* fetch() {
  console.log("called from saga");
}

export function* appSaga() {
  yield takeEvery(actionTypes.FETCH_DATA_START, fetch);
}
