import React from "react";

export default function Portfolio() {
  return (
    <div className="pageContent" id="portfolio">
      <div className="portfolioCollection">
        <div className="projectWindowContainer">
          <div className="project active" id="Minesweeper_window">
            <div className="featureClose" onClick={closeFeatureList}>
              x
            </div>
            Minesweeper Features
          </div>
          <div className="project" id="Job_Listing_App_window">
            <div className="featureClose" onClick={closeFeatureList}>
              x
            </div>
            Job Listing App Features
          </div>
          <div className="project" id="Widget_window">
            <div className="featureClose" onClick={closeFeatureList}>
              x
            </div>
            Widget App Features
          </div>
          <div className="project" id="Pending_Projects_window">
            <div className="featureClose" onClick={closeFeatureList}>
              x
            </div>
            Pending App Features
          </div>
          <div className="project" id="Music_App_window">
            <div className="featureClose" onClick={closeFeatureList}>
              x
            </div>
            Music App Features
          </div>
        </div>
        <div className="projectType" id="interactive">
          <div className="projectTitleContainers" id="interactiveTitle">
            <h1>Interactive Projects </h1>
          </div>
          <div className="interactiveProjects">
            <div className="projectLists" onClick={projectSelect}>
              <h1 className="projectName active">Minesweeper</h1>
              <h1 className="projectName">Job Listing App</h1>
              <h1 className="projectName">Widget</h1>
              <h1 className="projectName">Pending Projects</h1>
            </div>
            <div className="projectTitleContainers" id="databaseTitle">
              <h1>Database/Framework Projects</h1>
            </div>
            <div className="projectLists" onClick={projectSelect}>
              <h1 className="projectName">Music App</h1>
            </div>
            <div className="projectShowcase">
              <div className="featureButton">
                <button onClick={seeProject}>See Project</button>
              </div>
              <div className="projectFeatures active" id="Minesweeper">
                <div>
                  <MinesweeperDetails />
                </div>
              </div>
              <div className="projectFeatures" id="Job_Listing_App">
                <div>Job Listing App Pending</div>
              </div>
              <div className="projectFeatures" id="Widget">
                <div>Widget app Pending</div>
              </div>
              <div className="projectFeatures" id="Pending_Projects">
                <div>Pending Projects</div>
              </div>
              <div className="projectFeatures" id="Music_App">
                <div>Music App Project Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function projectSelect(e) {
  e.preventDefault();

  let targetClass = e.target.classList.value;
  let targetProjectButton = targetClass.includes("projectName")
    ? e.target
    : null;

  if (!targetProjectButton) return;

  let buttonClass = targetProjectButton.classList.value;

  let allProjectButtons = document.getElementsByClassName("projectName");

  for (let i = 0; i < allProjectButtons.length; i++) {
    if (allProjectButtons[i] === targetProjectButton) continue;

    let projectId = allProjectButtons[i].innerHTML.replaceAll(" ", "_");
    let projectWindowId = projectId + "_window";
    let projectWindow = document.getElementById(projectWindowId);
    let projectActive = document.getElementById(projectId);
    let detailsActive = projectActive.children[1];

    if (allProjectButtons[i].classList.value.includes("active")) {
      allProjectButtons[i].classList.remove("active");
      projectActive.classList.remove("active");
      detailsActive ? detailsActive.classList.remove("active") : null;
      projectWindow ? projectWindow.classList.remove("active") : null;
      break;
    }
  }

  let projectId = targetProjectButton.innerHTML.replaceAll(" ", "_");
  let projectWindowId = projectId + "_window";
  let projectActive = document.getElementById(projectId);
  let projectWindow = document.getElementById(projectWindowId);

  if (!buttonClass.includes(" active")) {
    targetProjectButton.classList.add("active");
    projectActive.classList.add("active");
    projectWindow.classList.add("active");
  }
}

function seeProject(e) {
  e.preventDefault();

  let projectDetails = e.target.parentElement.parentElement.children;

  let activeProject;

  for (let i = 1; i < projectDetails.length; i++) {
    let currentProject = projectDetails[i];
    if (currentProject.classList.value.includes("projectFeatures active")) {
      activeProject = currentProject;
      break;
    }
  }

  let projectWindowContainer = document.getElementsByClassName(
    "projectWindowContainer"
  )[0];
  let activeProjectWindowId = activeProject.id + "_window";
  let projectWindow = document.getElementById(activeProjectWindowId);

  projectWindowContainer.classList.add("active");
  console.log(projectWindowContainer);
  projectWindow.classList.add("active");
}

function closeFeatureList(e) {
  e.preventDefault();

  let close = e.target;
  let detailBox = close.parentElement.parentElement;

  detailBox.classList.remove("active");
}

function MinesweeperDetails() {
  return (
    <div>
      <h1>This is the Minesweeper Project</h1>

      <h3>
        Integrated asynchronous components that respond to user events with each
        tile
        <h3 />
        <h3>Implemented rendering actions that respond to user events</h3>
      </h3>
    </div>
  );
}
