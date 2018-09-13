import * as React from "react";
import { Page } from "../reducers/currentPage";
import { IStoreState } from "../types";

export interface IPageProps extends IStoreState {
  currentPage: Page;
  selectHashing: () => void;
  selectIntro: () => void;
  selectPublic: () => void;
  selectSymmetric: () => void;
}

function Navbar({
  currentPage,
  selectHashing,
  selectIntro,
  selectPublic,
  selectSymmetric
}: IPageProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar sticky-top">
      <a className="navbar-brand" href="#">
        Crytpo Concepts
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className={
              "nav-item" + (currentPage === Page.Intro ? " active" : "")
            }
          >
            <a className="nav-link" href="#" onClick={selectIntro}>
              Intro
            </a>
          </li>
          <li
            className={
              "nav-item" + (currentPage === Page.Hashing ? " active" : "")
            }
          >
            <a className="nav-link" href="#" onClick={selectHashing}>
              Hashing
            </a>
          </li>
          <li
            className={
              "nav-item" + (currentPage === Page.Symmetric ? " active" : "")
            }
          >
            <a className="nav-link" href="#" onClick={selectSymmetric}>
              Symmetric Crypto
            </a>
          </li>
          <li
            className={
              "nav-item" + (currentPage === Page.Public ? " active" : "")
            }
          >
            <a className="nav-link" href="#" onClick={selectPublic}>
              Public Key Crypto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
