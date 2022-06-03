import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SvgComponents } from "../components/svgComponent.jsx";

function CreateLogos() {
  const logos = ["eat", "sleep", "code", "repeat"];
  const content = [];

  for (let i = 0; i < logos.length; i++) {
    let iconKey = "icon " + i;
    content.push(
      <div key={iconKey} className="logo" id={logos[i]}>
        <img
          className="logo_image"
          src={"./images/" + logos[i] + "_logo.svg"}
        />
        <div>
          <p className="logo_text">
            {logos[i]}
            <span>()</span>
          </p>
        </div>
      </div>
    );
  }
  return content;
}

function GreetingBuild() {
  const arrow = "\u27AA";
  return (
    <div className="greetings">
      <div className="logo-container slide-in">
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
        <p className="scrollPrompt bounce">
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
  let [accScroll, scrollUpdate] = useState(0);
  let [accTouch, touchUpdate] = useState(0);
  let navigate = useNavigate();

  function scrollHandler(e) {
    let currentScroll = e.deltaY < 0 ? e.deltaY : 0;
    let scrollRatio = currentScroll ? accScroll / currentScroll : 0;

    scrollUpdate(accScroll + currentScroll);
    setTimeout(scrollUpdate, 1000, 0);

    if (scrollRatio > 5) {
      navigate("/sj/home");
    }
    return;
  }

  function swipeHandler(e) {
    let currentSwipe = e.touches[0];
    let swipePosition = currentSwipe.screenY;

    let swipeRatio = accTouch / swipePosition;

    touchUpdate(accTouch + swipePosition);
    setTimeout(touchUpdate, 1000, 0);

    if (swipeRatio > 7) {
      navigate("/sj/home");
    }
    return;
  }

  return (
    <div className="intro" onWheel={scrollHandler} onTouchMove={swipeHandler}>
      <GreetingBuild />
      <PhotoSide />
      <SvgComponents />
    </div>
  );
}

export { IntroPage };
