import * as React from "react";
import * as ReactDOM from "react-dom";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { HashingAction } from "./actions";
// import App from "./App";
import Hashing from "./containers/Hashing";
import { enthusiasm } from "./reducers/index";
import { IStoreState } from "./types/index";

const store = createStore<IStoreState, HashingAction, null, null>(enthusiasm, {
  enthusiasmLevel: 1,
  hashingInput: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <Hashing />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
