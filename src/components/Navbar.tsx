import * as React from "react";
import { Page } from "../types";

// tslint:disable-next-line:no-empty-interface
export interface IProps {
  chooseHashing: () => void;
  chooseIntro: () => void;
  chooseMining: () => void;
  choosePublic: () => void;
  chooseSymmetric: () => void;
  currentPage: Page;
}

function Navbar({
  chooseHashing,
  chooseIntro,
  chooseMining,
  choosePublic,
  chooseSymmetric,
  currentPage
}: IProps) {
  return (
    <nav>
      <div className="nav-wrapper blue-grey">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className={currentPage === Page.Intro ? "active" : ""}>
            <a onClick={chooseIntro}>Intro</a>
          </li>
          <li className={currentPage === Page.Hashing ? "active" : ""}>
            <a onClick={chooseHashing}>Hashing</a>
          </li>
          <li className={currentPage === Page.Symmetric ? "active" : ""}>
            <a onClick={chooseSymmetric}>Symmetric Crypto</a>
          </li>
          <li className={currentPage === Page.Public ? "active" : ""}>
            <a onClick={choosePublic}>Public Key Crypto</a>
          </li>
          <li className={currentPage === Page.Mining ? "active" : ""}>
            <a onClick={chooseMining}>Mining</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
