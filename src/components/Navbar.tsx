import * as React from "react";
import { Page } from "../reducers/CurrentPage";
import { INavigationState } from "../types";

export interface IPageProps extends INavigationState {
  currentPage: Page;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function Navbar({ currentPage, onClick }: IPageProps) {
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
            <a className="nav-link" href="#" onClick={onClick} id={Page.Intro}>
              Intro
            </a>
          </li>
          <li
            className={
              "nav-item" + (currentPage === Page.Hashing ? " active" : "")
            }
          >
            <a
              className="nav-link"
              href="#"
              onClick={onClick}
              id={Page.Hashing}
            >
              Hashing
            </a>
          </li>
          <li
            className={
              "nav-item" + (currentPage === Page.Symmetric ? " active" : "")
            }
          >
            <a
              className="nav-link"
              href="#"
              onClick={onClick}
              id={Page.Symmetric}
            >
              Symmetric Crypto
            </a>
          </li>
          <li
            className={
              "nav-item" + (currentPage === Page.Public ? " active" : "")
            }
          >
            <a className="nav-link" href="#" onClick={onClick} id={Page.Public}>
              Public Key Crypto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
