import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
