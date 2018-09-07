import { combineReducers } from "redux";
import CurrentPage from "./CurrentPage";

const rootReducer = combineReducers({
  navigation: CurrentPage
});

export default rootReducer;
