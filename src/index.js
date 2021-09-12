/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainContext } from "./context/MainContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainContext>
        <App />
      </MainContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
