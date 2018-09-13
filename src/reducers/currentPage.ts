import { Reducer } from "redux";
import { IStoreState } from "../types";

export const enum Page {
  Intro = "Intro",
  Hashing = "Hashing",
  Symmetric = "Symmetric",
  Public = "Public"
}

export interface IPageAction {
  type: Page;
}

// TODO: Put elsewhere
const defaultState: IStoreState = {
  currentPage: Page.Intro
};

const currentPage: Reducer = (
  state: IStoreState = defaultState,
  action: IPageAction
): IStoreState => {
  switch (action.type) {
    case Page.Intro:
      return { ...state, currentPage: Page.Intro };
    case Page.Hashing:
      return { ...state, currentPage: Page.Hashing };
    case Page.Symmetric:
      return { ...state, currentPage: Page.Symmetric };
    default:
      return state;
  }
};

export default currentPage;
