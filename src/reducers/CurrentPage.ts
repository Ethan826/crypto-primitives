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

const CurrentPage = (state: IStoreState, action: IPageAction): IStoreState => {
  switch (action.type) {
    case Page.Intro:
      return { ...state, navigation: { currentPage: Page.Intro } };
    case Page.Hashing:
      return { ...state, navigation: { currentPage: Page.Hashing } };
    case Page.Symmetric:
      return { ...state, navigation: { currentPage: Page.Symmetric } };
    default:
      return state;
  }
};

export default CurrentPage;
