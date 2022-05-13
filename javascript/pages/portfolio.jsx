import React from "react";

export default function Portfolio() {
  return (
    <div className="pageContent" id="portfolio">
      <div className="portfolioCollection">
        <div className="projectType" id="interactive">
          <div className="projectTitleContainers" id="interactiveTitle">
            <h1>Interactive Projects </h1>
          </div>
          <div className="interactiveProjects">
            <div className="interactiveProjectList" onClick={projectSelect}>
              <h1 className="projectName active">Minesweeper</h1>
              <h1 className="projectName">Job Listing App</h1>
              <h1 className="projectName">Widget</h1>
              <h1 className="projectName">Pending Projects</h1>
            </div>
            <div className="projectShowcase">
              <div className="featureButton">
                <button onClick={seeFeatureList}>See Feature List</button>
              </div>
              <div className="project active" id="Minesweeper">
                <div>Minesweeper Project Pending</div>
                <div className="projectFeatures" id="minesweeperDetails">
                  <div className="featureClose" onClick={closeFeatureList}>
                    x
                  </div>
                  Minesweeper Features
                </div>
              </div>
              <div className="project" id="Job_Listing_App">
                <div>Job Listing App Pending</div>
                <div className="projectFeatures" id="jobDetails">
                  <div className="featureClose" onClick={closeFeatureList}>
                    x
                  </div>
                  Job Listing App Features
                </div>
              </div>
              <div className="project" id="Widget">
                <div>Widget app Pending</div>
                <div className="projectFeatures" id="widgetDetails">
                  <div className="featureClose" onClick={closeFeatureList}>
                    x
                  </div>
                  Widget App Features
                </div>
              </div>
              <div className="project" id="Pending_Projects">
                <div>Pending Projects</div>
                <div className="projectFeatures" id="pendingDetails">
                  <div className="featureClose" onClick={closeFeatureList}>
                    x
                  </div>
                  Pending App Features
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectType" id="database">
          <div className="projectTitleContainers" id="databaseTitle">
            <h1>Database/Framework Projects</h1>
          </div>
          <div className="databaseProjects">
            <div className="interactiveProjectList">
              <h1 className="projectName active">Music App</h1>
            </div>
            <div className="projectShowcase">
              <div className="featureButton">
                <button onClick={seeFeatureList}>See Feature List</button>
              </div>
              <div className="project active">
                <div>Music App Project Pending</div>
                <div className="projectFeatures" id="musicDetails">
                  <div className="featureClose" onClick={closeFeatureList}>
                    x
                  </div>
                  Music App Features
                </div>
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
  let targetProject = targetClass.includes("projectName") ? e.target : null;

  if (!targetProject) return;

  let targetProjectClass = targetProject.classList.value;
  let allProjects = e.currentTarget.children;

  for (let i in allProjects) {
    if (allProjects[i] === targetProject || !allProjects[i].tagName) continue;
    let projectId = allProjects[i].innerHTML.replaceAll(" ", "_");
    let projectActive = document.getElementById(projectId);
    let detailsActive = projectActive.children[1];

    if (allProjects[i].classList.value.includes("active")) {
      allProjects[i].classList.remove("active");
      projectActive.classList.remove("active");
      detailsActive ? detailsActive.classList.remove("active") : null;
      break;
    }
  }

  let projectId = targetProject.innerHTML.replaceAll(" ", "_");
  let projectActive = document.getElementById(projectId);

  if (!targetProjectClass.includes(" active")) {
    targetProject.classList.add("active");
    projectActive.classList.add("active");
  }
}

function seeFeatureList(e) {
  e.preventDefault();

  let button = e.target;
  let projects = button.parentElement.parentElement.children;
  let len = projects.length;

  let activeProject;

  for (let i = 1; i < len; i++) {
    let currentProject = projects[i];
    if (currentProject.classList.value.includes("project active")) {
      activeProject = currentProject;
      break;
    }
  }

  let details = activeProject.children[1];
  details.classList.add("active");
}

function closeFeatureList(e) {
  e.preventDefault();

  let close = e.target;
  let detailBox = close.parentElement;

  detailBox.classList.remove("active");
}
