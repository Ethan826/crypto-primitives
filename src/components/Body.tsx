import * as React from "react";
import { Page } from "../reducers/CurrentPage";

// tslint:disable-next-line:no-empty-interface
export interface IProps {
  currentPage: Page;
}

const Body = ({ currentPage }: IProps) => {
  return (
    <div className="hello">
      <p>{currentPage}</p>
    </div>
  );
};

export default Body;
