import { combineReducers } from "redux";
import { appReducer, AppStateType, AppActionType } from "./app";

export type ActionType = AppActionType & {};

export type StoreType = AppStateType & {};

export const rootReducer = combineReducers({ app: appReducer });
