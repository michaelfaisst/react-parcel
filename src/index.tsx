import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

import "./styles/main.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
