import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Navbar from "../components/Navbar";
import { IPageAction, Page } from "../reducers/CurrentPage";
import { INavigationState } from "../types";

export function mapStateToProps({ currentPage }: INavigationState) {
  return { currentPage };
}

export function mapDispatchToProps(dispatch: Dispatch<IPageAction>) {
  return {
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      dispatch({ type: Page.Hashing })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
