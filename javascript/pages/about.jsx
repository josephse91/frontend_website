import React from "react";

export default function About() {
  return (
    <div className="pageContent" id="about">
      <div className="aboutContent" onClick={videoSelect}>
        <div className="videoTab">
          <h1 className="videoTopic activeVid">Why Did I Choose Tech</h1>
          <div className="aboutVideo activeVid">{videoTopic("day")}</div>
        </div>
        <div className="videoTab">
          <h1 className="videoTopic">Software Engineer at Heart</h1>
          <div className="aboutVideo">{videoTopic("specialization")}</div>
        </div>
        <div className="videoTab">
          <h1 className="videoTopic">Self-Taught Journey</h1>
          <div className="aboutVideo">{videoTopic("self")}</div>
        </div>
        <div className="videoTab">
          <h1 className="videoTopic">Coding Community</h1>
          <div className="aboutVideo">{videoTopic("community")}</div>
        </div>
      </div>
    </div>
  );
}

function videoTopic(topic) {
  let select = 0;

  if (topic.startsWith("day")) {
    select = 0;
  } else if (topic.startsWith("specialization")) {
    select = 1;
  } else if (topic.startsWith("self")) {
    select = 2;
  } else if (topic.startsWith("community")) {
    select = 3;
  }

  let videos = [
    ["Why Did I Choose Tech", "https://www.youtube.com/embed/N6HpOu6jzvI"],
    ["Engineer at Heart", "https://www.youtube.com/embed/RUAFJ4afdfo"],
    ["Self-Taught Journey", "https://www.youtube.com/embed/SLFQDDVqv_o"],
    ["Community", "https://www.youtube.com/embed/wx6TUCK6r5w"],
  ];

  return (
    <iframe
      className="video"
      title={videos[select][0]}
      src={videos[select][1]}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
    ></iframe>
  );
}

function videoSelect(event) {
  event.preventDefault();

  let activeVidTab = document.getElementsByClassName("videoTopic activeVid")[0];
  let clickedTarget = event.target;

  if (activeVidTab === clickedTarget) {
    activeVidTab.classList.remove("activeVid");
    activeVidTab.nextElementSibling.classList.remove("activeVid");
    return;
  }

  if (
    clickedTarget.className !== "videoTopic activeVid" &&
    clickedTarget.className.includes("videoTopic")
  ) {
    if (activeVidTab) {
      activeVidTab.classList.remove("activeVid");
      activeVidTab.nextElementSibling.classList.remove("activeVid");
    }
    clickedTarget.classList.add("activeVid");
    clickedTarget.nextElementSibling.classList.add("activeVid");
  }
}
