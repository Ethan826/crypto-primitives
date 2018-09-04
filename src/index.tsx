import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { IStoreState } from "./components/types";
import "./index.css";
import rootReducer from "./reducers";
import { IPageAction } from "./reducers/CurrentPage";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore<IStoreState, IPageAction, null, null>(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
