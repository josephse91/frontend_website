import React from "react";
import { Bullet } from "../components/svgComponent";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteSlide: 0,
    };
    this.quotes = this.quoteList();
  }

  componentDidMount() {
    this.slideTimer();
  }

  slideTimer() {
    this.quoteTimer = setInterval(
      () =>
        this.setState((state) => ({
          quoteSlide: (state.quoteSlide + 1) % this.quotes.length,
        })),
      5000
    );
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
          <div className="learningContainer">
            <h1 className="section_title" id="learning_title">
              Words to Live By
            </h1>
            {this.generateQuote(this.state.quoteSlide)}
          </div>
        </div>
      </div>
    );
  }

  accordianHandle(event) {
    event.preventDefault();

    let educationItem = event.currentTarget;
    let itemDescription = educationItem.nextElementSibling;
    let bullet = educationItem.children.bullet;

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
    }
  }

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

  quoteList() {
    let quotes = [
      [
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "Mahatma Gandhi",
      ],
      [
        "Being a student is easy. Learning requires actual work.",
        "William Crawford",
      ],
      ["Change is the end result of all true learning.", "Leo Buscaglia"],
      [
        "The beautiful thing about learning is nobody can take it away from you.",
        "B.B King",
      ],
      [
        "Commit yourself to lifelong learning. The most valuable asset you'll ever have is your mind and what you put into it.",
        "Albert Einstein",
      ],
      [
        "No thief, however skillful, can rob one of knowledge, and that is why knowledge is the best and safest treasure to acquire.",
        "Frank Baum",
      ],
      [
        "Never let formal education get in the way of your learning.",
        "Mark Twain",
      ],
      [
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
        "Malcolm X",
      ],
      [
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
        "Pele",
      ],
      [
        "Continuous learning is the minimum requirement for success in any field.",
        "Brian Tracy",
      ],
      [
        "The key to pursuing excellence is to embrace an organic, long-term learning process, and not to live in a shell of static, safe mediocrity.",
        "Josh Waitzkin",
      ],
    ];
    return quotes;
  }

  generateQuote(i) {
    let quotes = this.quotes;
    let that = this;

    let clickQuote = function (event) {
      event.preventDefault();
      clearInterval(that.quoteTimer);

      let clickedQuote = event.target;
      let clickedQuoteId = clickedQuote.id.slice(6);
      let quoteNum = Number(clickedQuoteId);

      console.log(that.quotes.length, quoteNum);

      that.setState({ quoteSlide: quoteNum });
      that.slideTimer();
    };

    let quoteButtons = function () {
      let allButtons = [];
      for (let n = 0; n < quotes.length; n++) {
        let quoteId = "quote " + n;
        let quoteClass = n === i ? "quoteButton activeQuote" : "quoteButton";
        allButtons.push(
          <span className={quoteClass} id={quoteId} onClick={clickQuote}></span>
        );
      }

      return allButtons;
    };

    return (
      <div className="quotesContainer">
        <div className="quoteBox">
          <div className="quote">{this.quotes[i][0]}</div>
          <div className="author">~{this.quotes[i][1]}</div>
        </div>
        <div className="quoteButtons">{quoteButtons()}</div>
      </div>
    );
  }
}

export default Home;
