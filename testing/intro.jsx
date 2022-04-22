import React from "react";
import ReactDOM from "react-dom";

const logos = ["eat", "sleep", "code", "repeat"];

function CreateLogos() {
  const content = [];
  for (let i = 0; i < logos.length; i++) {
    const imageImport = `./images/{logos[i]}_logo.svg`;
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
/*
function IntroBuild() {
  return (
  <div className="greetings">
      <div className="logo-container">
        <CreateLogos/>
      </div>
      <div class="intro-content">
        <div class="nameplate"><p>Serge-Edouard</p> <p>Joseph</p> <p id="charactertag">Self-taught :: Problem Solver :: Optimist</p></div>
        <div class="intro_statement"><p >Just a new Software Engineer looking for a great fit</p></div>
      </div>
      <div class="scrollEnter"> 
        <p class="scrollPrompt"> <span>&#10154</span> Scroll to enter page <span>&#10154</span>
        </p>
      </div>
    </div>
    <div class="introPic">
      <image class="me" src="./images/CP3GQ.png"></image>
    </div>
  )
}
*/
const logoContainer = <div className="logo-container"></div>;

/*
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementsByClassName("main");
  ReactDOM.render(<CreateLogos />, main);
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<CreateLogos />, main);
});
