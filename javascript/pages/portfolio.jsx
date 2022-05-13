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
            <div className="interactiveProjectList">
              <h1 className="projectName active">Minesweeper</h1>
              <h1 className="projectName">Job Listing App</h1>
              <h1 className="projectName">Widget</h1>
              <h1 className="projectName">Pending Projects</h1>
            </div>
            <div class="projectShowcase">
              <div className="projectDetails">
                <p>See Feature List</p>
              </div>
              <div className="project active">
                <div>Minesweeper Project Pending</div>
                <div className="projectFeatures">Function with Features</div>
              </div>
              <div className="project">Job Listing App Pending</div>
              <div className="project">Widget app Pending</div>
              <div className="project">Pending Projects</div>
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
            <div class="projectShowcase">
              <div className="project active">Music App Project Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
