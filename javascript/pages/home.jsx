import React from "react";
import { Bullet } from "../components/svgComponent";

class Home extends React.Component {
  skillList() {
    let skill = [
      "HTML/CSS",
      "Javascript ES5/ES6",
      "Ruby",
      "Ruby on Rails",
      "jQuery",
      "React",
      "Redux",
      "SQL(PostgreSQL/SQLite3)",
      "Git/GitHub",
      "SASS",
    ];

    let skills = [];

    for (let i = 0; i < skill.length; i++) {
      skills.push(<li className="skill">{skill[i]}</li>);
    }
    return skills;
  }

  education(type) {
    let descriptions = [];

    let appacademy = [
      "Created projects using front-end (client-side), back-end (server-side), and databases for web applications",
      "Created web application projects using Ruby on Rails framework",
      "Collaborated with developers to create efficient and scalable code",
      "Applied code optimization strategies and modern application techniques: \nTDD, scalability, algorithms, OOP, coding style, REST, security, single-page apps, and web development best practices",
    ];
    let codecademy = ["HTML", "CSS", "Intermediate CSS", "SASS", "javascript"];
    let binghamton = ["BS - Mechanical Engineering (Spring 2014)"];

    let educationType;
    if (type === "appacademy") {
      educationType = appacademy;
    } else if (type === "codecademy") {
      educationType = codecademy;
    } else if (type === "binghamton") {
      educationType = binghamton;
    }

    descriptions = educationType.map((el) => <li className="bullet">{el}</li>);
    return descriptions;
  }

  accordianHandle(event) {
    event.preventDefault();

    let educationItem = event.currentTarget;
    let itemDescription = educationItem.nextElementSibling;
    let bullet = educationItem.children.bullet;

    console.log(bullet.children[0].style);

    // /*
    if (itemDescription.classList.length !== 1) {
      itemDescription.classList.remove("education_description_active");
      bullet.style.transform = "rotate(270deg)";
      bullet.children[0].style.fill = "black";
      educationItem.classList.remove("education_active");
    } else {
      itemDescription.classList.add("education_description_active");
      bullet.style.transform = "rotate(0deg)";
      bullet.children[0].style.fill = "tan";
      educationItem.classList.add("education_active");

      // console.log(educationItem, educationItem[0]);
    }
    // */
  }

  render() {
    return (
      <div className="pageContent" id="home">
        <div className="personalSide"></div>
        <div className="infoSide">
          <div className="leadStatement">
            <h1>
              Success is no accident. It is hard work, perseverance, learning,
              studying, sacrifice and most of all, love of what you are doing or
              learning to do
            </h1>
          </div>

          <div className="skillsContainer">
            <h1 className="section_title" id="skills_title">
              Skills
            </h1>
            <ul className="skills">{this.skillList()}</ul>
          </div>

          <div className="educationContainer">
            <h1 className="section_title" id="education_title">
              Education
            </h1>
            <h2 className="education" onClick={this.accordianHandle}>
              <Bullet />
              <img className="e_logo" src="../images/appacademy_logo.png" />
              App Academy Open
            </h2>
            <ul className="education_description">
              {this.education("appacademy")}
            </ul>
            <h2 className="education" onClick={this.accordianHandle}>
              <Bullet />
              <img className="e_logo" src="../images/codecademy_logo.png" />
              Codecademy
            </h2>
            <ul className="education_description">
              {this.education("codecademy")}
            </ul>
            <h2 className="education" onClick={this.accordianHandle}>
              <Bullet />
              <img className="e_logo" src="../images/binghamton_logo.png" />
              Binghamton
            </h2>
            <ul className="education_description">
              {this.education("binghamton")}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
