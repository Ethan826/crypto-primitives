import { combineReducers } from "redux";
import CurrentPage from "./CurrentPage";

const rootReducer = combineReducers({
  currentPage: CurrentPage
});

export default rootReducer;
