import * as React from "react";
// import Hashing from "./containers/Hashing";
import Symmetric from "./containers/Symmetric";

const App = () => {
  return (
    <div className="container">
      <nav>
        <div className="nav-wrapper blue-grey">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="section" />
      <div className="row">
        {/* <Hashing /> */}
        <Symmetric />
      </div>
    </div>
  );
};

export default App;
