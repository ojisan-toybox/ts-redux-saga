import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./pages/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
