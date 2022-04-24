import React from "react";
import ReactDOM from "react-dom";
import { IntroPage } from "./javascript/pages/intro";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<IntroPage />, main);
});
