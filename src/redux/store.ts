import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { rootReducer, StoreType, ActionType } from "./modules";
import { rootSaga } from "./sagas";

const logger = createLogger({});

const sagaMiddleware = createSagaMiddleware();

// NOTE: 本当はここにStoreTypeとActionTypeの注釈を入れたかった。推論を信じるなら不要な気もするが。
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);
