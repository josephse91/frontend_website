import React from "react";

export default function Portfolio() {
  return (
    <div className="pageContent" id="portfolio">
      <div className="portfolio_title_block">
        <h1 className="tab_title">Projects</h1>
        <p className="projects_motto">Dive into some of my projects</p>
      </div>
      <div className="project_container">
        <div
          className="project"
          onTouchEnd={projectTouch}
          onMouseEnter={projectHover}
          onMouseLeave={projectHover}
          onMouseOver={projectOver}
        >
          <img className="project_thumbnail" src="../images/pokeball.PNG" />
          <ProjectDescriptions project="Pokemon Pokedex" />
        </div>
        <div
          className="project"
          onTouchEnd={projectTouch}
          onMouseEnter={projectHover}
          onMouseLeave={projectHover}
          onMouseOver={projectOver}
        >
          <img className="project_thumbnail" src="../images/minesweeper.png" />
          <ProjectDescriptions project="Minesweeper" />
        </div>
        <div
          className="project"
          onTouchEnd={projectTouch}
          onMouseEnter={projectHover}
          onMouseLeave={projectHover}
          onMouseOver={projectOver}
        >
          <img
            className="project_thumbnail"
            src="../images/music app bands.PNG"
          />
          <ProjectDescriptions project="Music App" />
        </div>
        <div
          className="project"
          onTouchEnd={projectTouch}
          onMouseEnter={projectHover}
          onMouseLeave={projectHover}
          onMouseOver={projectOver}
        >
          <img className="project_thumbnail" src="../images/react widget.png" />
          <ProjectDescriptions project="React Widget" />
        </div>
      </div>
    </div>
  );
}

function ProjectDescriptions(props) {
  let projects = {
    "Pokemon Pokedex": [
      "A tool made to reference data on pokemon",
      ["Rails", "Jbuilder", "Javascript", "React", "React Router", "Redux"],
      "https://github.com/josephse91/pokedex",
      "https://serge-pokedex.herokuapp.com/#/",
    ],
    "Music App": [
      "Inventory system that holders your favorite albums, artists, songs and lyrics",
      ["Ruby", "Rails", "SASS"],
      "https://github.com/josephse91/Music-Inventory-System",
      "https://serge-music.herokuapp.com/session/new",
    ],
    Minesweeper: [
      "Interactive version of minesweeper",
      ["Javascript", "React", "CSS"],
      "https://github.com/josephse91/minesweeper_project",
      "https://josephse91.github.io/minesweeper_project/",
    ],
    "React Widget": [
      "Useful widgets built to demonstrate React capabilities",
      ["Javascript", "React", "CSS"],
      "https://github.com/josephse91/React_widget",
      "https://josephse91.github.io/React_widget/",
    ],
  };
  let project = props.project;
  let projectSkills = projects[project][1];

  let skillsUsed = projectSkills.map((skill) => {
    let skill_key = project + "_" + skill;
    return (
      <li className="project_skill" key={skill_key}>
        {skill}
      </li>
    );
  });

  return (
    <div className="project_overlay">
      <h2 className="project_title">{project}</h2>
      <p className="project_description">{projects[project][0]}</p>

      <h3 className="skills_used_title">Skills Used</h3>
      <ul className="pSkillbox">{skillsUsed}</ul>

      <div className="project_links">
        <a
          className="links"
          id="github_repo_link"
          href={projects[project][2]}
          target="_blank"
        >
          Github Repository
        </a>
        <a
          className="links"
          id="live_project_link"
          href={projects[project][3]}
          target="_blank"
        >
          Live Project
        </a>
      </div>
    </div>
  );
}

function projectHover(e) {
  let box = e.currentTarget;
  let overlay = box.lastElementChild;
  let overlayClass = overlay.classList.value;

  overlay.classList.toggle("active");
}

function projectOver(e) {
  let box = e.currentTarget;
  let overlay = box.lastElementChild;
  let overlayClass = overlay.classList.value;

  !overlayClass.includes("active") ? overlay.classList.toggle("active") : null;
}

function projectTouch(e) {
  let box = e.currentTarget;
  let overlay = box.lastElementChild;

  if (window.outerWidth < 800) {
    overlay.classList.toggle("active");
  }
}
