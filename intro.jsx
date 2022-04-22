import React from "react";
import ReactDOM from "react-dom";

const logos = ["eat", "sleep", "code", "repeat"];

function CreateLogos() {
  for (let i = 0; i < logos.length; i++) {
    return (
      <div className="logo" id={logos[i]}>
        <img className="logo_image" src="./images/eat_logo.svg" />
      </div>
    );
  }
}

const logoContainer = <div className="logo-container"></div>;

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementsByClassName("main");
  ReactDOM.render(<CreateLogos />, main);
});
