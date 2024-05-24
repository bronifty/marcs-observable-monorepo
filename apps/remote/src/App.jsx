import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import RemoteCounter from "./RemoteCounter";

const App = () => (
  <div className="container">
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <RemoteCounter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
