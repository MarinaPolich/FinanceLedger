import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "modern-normalize/modern-normalize.css";
import { GlobalStyle } from "./index.styled.js";
import "./stylesheet/vars.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
