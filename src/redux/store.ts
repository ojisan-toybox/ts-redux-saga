import { createStore } from "redux";
import { rootReducer } from "./module";

export const store = createStore(rootReducer);
