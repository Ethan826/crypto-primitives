import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers";
import { IPageAction, Page } from "./reducers/CurrentPage";
import registerServiceWorker from "./registerServiceWorker";
import { IStoreState } from "./types";

export const defaultState: IStoreState = {
  navigation: { currentPage: Page.Intro }
};

const store = createStore<IStoreState, IPageAction, null, null>(
  rootReducer,
  defaultState
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
