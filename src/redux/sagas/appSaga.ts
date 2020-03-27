import { takeEvery, put, call } from "redux-saga/effects";
import { actionTypes } from "../modules/app";
import { Repository } from "../../repository";
import { actionCreators } from "../modules/app";

const repository = Repository.of();

const getData2 = repository.fetchData;

function* fetchData(action: ReturnType<typeof actionCreators.fetchDataStart>) {
  try {
    const query = action.payload;
    const data = yield call(getData2, query);
    yield put(actionCreators.fetchDataSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(actionCreators.fetchDataFail(e));
  }
}

export function* appSaga() {
  yield takeEvery(actionTypes.FETCH_DATA_START, fetchData);
}
