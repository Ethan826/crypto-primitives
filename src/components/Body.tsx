import * as React from "react";
import { IStoreState } from "../types";
// import { INavigationState } from "../types";

const Body = ({ currentPage }: IStoreState) => {
  return (
    <div>
      <p>{currentPage}</p>
    </div>
  );
};

export default Body;
