import React from "react";
import Game from "../../projects/Minesweeper/components/game";
import { Job_App } from "../../projects/Job-Listing-Widget-Project/frontend/entry";

export default function Portfolio() {
  return (
    <div className="pageContent" id="portfolio">
      <div className="projectWindowContainer">
        <div className="project active" id="Minesweeper_window">
          <div className="featureClose" onClick={closeFeatureList}>
            x
          </div>
          <Game />
        </div>
        <div className="project" id="Job_Listing_App_window">
          <div className="featureClose" onClick={closeFeatureList}>
            x
          </div>
          <Job_App />
        </div>
        <div className="project" id="Widget_window">
          <div className="featureClose" onClick={closeFeatureList}>
            x
          </div>
          Widget Features
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
          <h1>Check Github Repository</h1>
        </div>
      </div>
      <div className="portfolioCollection">
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
                <MinesweeperDetails />
              </div>
              <div className="projectFeatures" id="Job_Listing_App">
                <Job_listing_Details />
              </div>
              <div className="projectFeatures" id="Widget">
                <Widgets_app />
              </div>
              <div className="projectFeatures" id="Pending_Projects">
                <Pending_Projects />
              </div>
              <div className="projectFeatures" id="Music_App">
                <Music_App />
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
    <div className="projectDetails">
      <h1 className="projectDetailTitle">Minesweeper Project</h1>

      <h2 className="projectDetailSubtitle">Programming Highlights</h2>
      <ul>
        <li className="projectDetailNote">
          State management to update the board (React)
        </li>
        <li className="projectDetailNote">
          Event Handlers established to users can select tiles
        </li>
        <li className="projectDetailNote">
          Object Oriented Principles to create tiles, boards and rules of the
          game
        </li>
        <li className="projectDetailNote">CSS styles applied</li>
      </ul>

      <h2 className="projectDetailSubtitle">Created Working Environment</h2>
      <ul>
        <li className="projectDetailNote">
          Initialized NPM and installing Dependencies
        </li>
        <li className="projectDetailNote">Configure Webpack</li>
      </ul>
    </div>
  );
}

function Job_listing_Details() {
  return (
    <div className="projectDetails">
      <h1 className="projectDetailTitle">Job Listing App</h1>

      <h2 className="projectDetailSubtitle">Programming Highlights</h2>
      <ul>
        <li className="projectDetailNote">Manage state using Redux library</li>
        <li className="projectDetailNote">
          Managed asynchronous XMLHttpRequests to gather data
        </li>
      </ul>

      <h2 className="projectDetailSubtitle">Created Working Environment</h2>
      <ul>
        <li className="projectDetailNote">
          Initialized NPM and installing Dependencies
        </li>
        <li className="projectDetailNote">Configure Webpack</li>
      </ul>
    </div>
  );
}

function Widgets_app() {
  return (
    <div className="projectDetails">
      <h1 className="projectDetailTitle">Widgets App</h1>

      <h2 className="projectDetailSubtitle">Programming Highlights</h2>
      <ul>
        <li className="projectDetailNote">
          Incorporate an API into a component
        </li>
        <li className="projectDetailNote">
          Managed asynchronous XMLHttpRequests to gather data
        </li>
        <li className="projectDetailNote">Create multiple simple components</li>
        <li className="projectDetailNote">
          Incorporation of Lifecycles with react to manage state
        </li>
        <li className="projectDetailNote">CSS styles applied</li>
      </ul>

      <h2 className="projectDetailSubtitle">Created Working Environment</h2>
      <ul>
        <li className="projectDetailNote">
          Initialized NPM and installing Dependencies
        </li>
        <li className="projectDetailNote">Configure Webpack</li>
      </ul>
    </div>
  );
}

function Pending_Projects() {
  return (
    <div className="projectDetails">
      <h1 className="projectDetailTitle">Sudoku Solver</h1>
      <ul>
        <li className="projectDetailNote">
          Sudoku boards will be generated using XMLHttpRequests
        </li>
        <li className="projectDetailNote">
          Sudoku game will be coded using Object oriented programming
        </li>
        <li className="projectDetailNote">
          Solver will use a data structure to solve the board
        </li>
      </ul>
    </div>
  );
}

function Music_App() {
  return (
    <div className="projectDetails">
      <h1 className="projectDetailTitle">Music App</h1>

      <div className="projectDetailBox">
        <img src="../images/Music App migrations.PNG" />
        <div className="projectDetailText">
          <h2 className="projectDetailSubtitle">
            Established the Rails work environment
          </h2>
          <ul>
            <li className="projectDetailNote">
              Setting up the schemas by using migrations
            </li>
            <li className="projectDetailNote">
              Activating the PostgreSQL database and Rails database
              configurations
            </li>
          </ul>
        </div>
      </div>

      <div className="projectDetailBox">
        <img src="../images/Music App sign-in.PNG" />
        <div className="projectDetailText">
          <h2 className="projectDetailSubtitle">
            Created User Models with user Authentication
          </h2>
          <ul>
            <li className="projectDetailNote">
              Login system uses Rails Validations to determine whether there is
              an active current user
            </li>
            <li className="projectDetailNote">Configure Webpack</li>
          </ul>
        </div>
      </div>
      <div className="projectDetailBox">
        <img src="../images/RESTful routing.PNG" />
        <div className="projectDetailText">
          <h2 className="projectDetailSubtitle">RESTful routing system</h2>
        </div>
      </div>
      <div className="projectDetailBox">
        <img src="../images/Music App Route.PNG" />
        <div className="projectDetailText">
          <h2 className="projectDetailSubtitle">
            Trigger Controller Actions from views using forms and links
          </h2>
        </div>
      </div>
      <div className="projectDetailBox">
        <img src="../images/Music App new route.PNG" />
        <div className="projectDetailText">
          <h2 className="projectDetailSubtitle">
            Create Data columns/attributes for objects that can be references in
            routes
          </h2>
        </div>
      </div>
    </div>
  );
}
