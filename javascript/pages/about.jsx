import React from "react";

export default function About() {
  return (
    <div className="pageContent" id="about">
      <div className="aboutContent" onClick={videoSelect}>
        <div className="videoTab">
          <h1 className="videoTopic active">Origin of my Interest in Tech</h1>
          <div className="aboutVideo active">{videoTopic("day")}</div>
        </div>
        <div className="videoTab">
          <h1 className="videoTopic">My Fit into Software Engineering</h1>
          <div className="aboutVideo">{videoTopic("specialization")}</div>
        </div>
        <div className="videoTab">
          <h1 className="videoTopic">Self-Taught Journey</h1>
          <div className="aboutVideo">{videoTopic("self")}</div>
        </div>
        <div className="videoTab">
          <h1 className="videoTopic">My Coding Community</h1>
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
    ["Day in the Life", "https://www.youtube.com/embed/oHBFD8cfXho"],
    [
      "specialization as a Software Engineer",
      "https://www.youtube.com/embed/Ouf-tpDAkK4",
    ],
    ["Self-Taught", "https://www.youtube.com/embed/3EUDyn_31-Q"],
    ["Community", "https://www.youtube.com/embed/a0wY2TBs3zY"],
  ];

  return (
    <iframe
      className="video"
      width="560"
      height="315"
      title={videos[select][0]}
      src={videos[select][1]}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
    ></iframe>
  );
}

function videoSelect(event) {
  event.preventDefault();

  let activeTab = document.getElementsByClassName("videoTopic active")[0];
  let clickedTarget = event.target;

  if (activeTab === clickedTarget) {
    activeTab.classList.remove("active");
    activeTab.nextElementSibling.classList.remove("active");
    return;
  }

  if (
    clickedTarget.className !== "videoTopic active" &&
    clickedTarget.className.includes("videoTopic")
  ) {
    if (activeTab) {
      activeTab.classList.remove("active");
      activeTab.nextElementSibling.classList.remove("active");
    }
    clickedTarget.classList.add("active");
    clickedTarget.nextElementSibling.classList.add("active");
  }
}
