import * as React from "react";
import Navbar from "./containers/Navbar";
// import Hashing from "./containers/Hashing";
import Symmetric from "./containers/Symmetric";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="row section">
        {/* <Hashing /> */}
        <Symmetric />
      </div>
    </div>
  );
};

export default App;
