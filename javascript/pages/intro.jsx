import React from "react";
import SvgComponents from "../components/svgComponent.jsx";

const logos = ["eat", "sleep", "code", "repeat"];
const arrow = "\u27AA";

function CreateLogos() {
  const content = [];
  for (let i = 0; i < logos.length; i++) {
    content.push(
      <div className="logo" id={logos[i]}>
        <img
          className="logo_image"
          src={"./images/" + logos[i] + "_logo.svg"}
        />
        <div>
          <p class="logo_text">
            {logos[i]}
            <span>()</span>
          </p>
        </div>
      </div>
    );
  }
  return content;
}
// /*
function GreetingBuild() {
  return (
    <div className="greetings">
      <div className="logo-container">
        <CreateLogos />
      </div>
      <div className="intro-content">
        <div className="nameplate">
          <p>Serge-Edouard</p> <p>Joseph</p>{" "}
          <p id="charactertag">Self-taught :: Problem Solver :: Optimist</p>
        </div>
        <div className="intro_statement">
          <p>Just a new Software Engineer looking for a great fit</p>
        </div>
      </div>
      <div className="scrollEnter">
        <p className="scrollPrompt">
          <span>{arrow}</span> Scroll to enter page <span>{arrow}</span>
        </p>
      </div>
    </div>
  );
}

function PhotoSide() {
  return (
    <div className="introPic">
      <img className="me" src="./images/CP3GQ.png" />
    </div>
  );
}

function IntroPage() {
  return (
    <div className="intro">
      <GreetingBuild />
      <PhotoSide />
      <SvgComponents />
    </div>
  );
}

export { IntroPage };
