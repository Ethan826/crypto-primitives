// import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Navbar from "../components/Navbar";
import { IPageAction, Page } from "../reducers/currentPage";
import { IStoreState } from "../types";

export function mapStateToProps({ currentPage }: IStoreState) {
  return { currentPage };
}

export function mapDispatchToProps(dispatch: Dispatch<IPageAction>) {
  return {
    selectHashing: () => {
      dispatch({ type: Page.Hashing });
    },
    selectIntro: () => {
      dispatch({ type: Page.Intro });
    },
    selectPublic: () => {
      dispatch({ type: Page.Public });
    },
    selectSymmetric: () => {
      dispatch({ type: Page.Symmetric });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
