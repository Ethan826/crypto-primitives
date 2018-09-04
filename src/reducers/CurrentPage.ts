import { defaultState, IStoreState } from "../components/types";

export const enum Page {
  Intro = "Intro",
  Hashing = "Hashing",
  Symmetric = "Symmetric",
  Public = "Public"
}

export interface IPageAction {
  type: Page;
}

const CurrentPage = (
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

export default CurrentPage;
