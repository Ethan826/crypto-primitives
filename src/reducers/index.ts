import { combineReducers } from "redux";
import { IStoreState } from "./../types/index";
import currentPage from "./currentPage";

const rootReducer = combineReducers<IStoreState>({
  currentPage
});

export default rootReducer;
