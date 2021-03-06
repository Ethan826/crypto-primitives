import * as React from "react";
import Hashing from "../containers/Hashing";
import Mining from "../containers/Mining";
import Public from "../containers/Public";
import Symmetric from "../containers/Symmetric";
import { Page } from "../types";

export interface IProps {
  currentPage: Page;
}

function Main({ currentPage }: IProps) {
  switch (currentPage) {
    case Page.Hashing:
      return <Hashing />;
      break;
    case Page.Mining:
      return <Mining />;
      break;
    case Page.Symmetric:
      return <Symmetric />;
      break;
    case Page.Public:
      return <Public />;
      break;
    default:
      return <Hashing />;
  }
}

export default Main;
