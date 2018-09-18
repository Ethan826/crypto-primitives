import * as React from "react";
import * as ReactDOM from "react-dom";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize";
import "../node_modules/materialize-css/extras/noUiSlider/nouislider.css";
import "../node_modules/materialize-css/extras/noUiSlider/nouislider.min";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { HashingAction } from "./actions";
import App from "./App";
import { reducer } from "./reducers/index";
import { IStoreState, Page } from "./types/index";

const store = createStore<IStoreState, HashingAction, null, null>(reducer, {
  hashing: {
    hashingInput: "",
    hashingOutput: ""
  },
  mining: {
    blockHash: "",
    difficulty: 0
  },
  navigation: {
    currentPage: Page.Intro
  },
  symmetric: {
    ciphertext: "",
    encrypt: true,
    plaintext: "",
    theKey: ""
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
