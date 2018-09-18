import * as React from "react";
import Main from "./containers/Main";
import Navbar from "./containers/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="row section">
        <Main />
      </div>
    </div>
  );
};

export default App;
