import React from "react";
import ReactDOM from "react-dom";
import { IntroPage } from "./javascript/pages/intro";
import Home from "./javascript/pages/home";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IntroPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  // const mainRoot = createRoot(main);
  ReactDOM.render(<App />, main);
  // mainRoot.render(<App />);
});
