import * as React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

class App extends React.Component {
  public render() {
    return (
      <div className="App container-fluid">
        <Navbar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="row">
            <Body />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
