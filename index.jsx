import React from "react";
import ReactDOM from "react-dom";
import { IntroPage } from "./javascript/pages/intro";
import Home from "./javascript/pages/home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="sj" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<App />, main);
});
