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
          <li>
            <a onClick={chooseIntro}>Intro</a>
          </li>
          <li>
            <a onClick={chooseHashing}>Hashing</a>
          </li>
          <li>
            <a onClick={chooseSymmetric}>Symmetric Crypto</a>
          </li>
          <li>
            <a onClick={choosePublic}>Public Key Crypto</a>
          </li>
          <li>
            <a onClick={chooseMining}>Mining</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
