import * as React from "react";

export default class Navbar extends React.Component {
  public render() {
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                Intro
                {/*<span className="sr-only">(current)</span> */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hashing
                {/*<span className="sr-only">(current)</span> */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Symmetric Crypto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Public Key Crypto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
