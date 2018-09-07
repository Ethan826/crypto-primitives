import { Page } from "../reducers/CurrentPage";

export interface INavigationState {
  currentPage: Page;
}

export interface IStoreState {
  navigation: INavigationState;
}
