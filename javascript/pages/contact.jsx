import React from "react";
import { LinkedInLogo, GithubLogo } from "../components/svgComponent";

export default function Contact() {
  return (
    <div className="pageContent" id="contact">
      <div className="contactBanner">
        <div className="bannerOverlay">
          <h1 className="bannerText">BE A PART OF MY CODING JOURNEY</h1>
        </div>
        <img src="../images/contact me.jpg" />
      </div>
      <div className="contactGrid">
        {myContactInfo()}
        {contactForm()}
      </div>
    </div>
  );
}

function myContactInfo() {
  return (
    <div className="contactLeft">
      <div className="contactWelcome">
        <h1>I'D LOVE TO HEAR FROM YOU!</h1>
        <p id="contactMission">
          I look forward to building relationships within the tech community.
          I'm open to any and every conversation.
        </p>
      </div>

      <div className="contactInfo">
        <h1>CONTACT INFORMATION</h1>
        <div className="contactLines">
          <img className="contactIcon" src="./images/phone.png" />
          <p>(516) 670-4896</p>
        </div>
        <div className="contactLines">
          <img className="contactIcon" src="./images/mail.png" />
          <p>sjoseph.eng@gmail.com</p>
        </div>
        <div className="contactLinks">
          <LinkedInLogo />
          <GithubLogo />
        </div>
      </div>
    </div>
  );
}

function sendMail(e) {
  e.preventDefault();

  let form = document.forms["visitorForm"];
  let formName = form["name"].value;
  let formEmail = form["email"].value;
  let formMessage = form["message"].value;

  // /*
  fetch("https://formsubmit.co/ajax/8783ffa2f15a5fa5983ea372cf049382", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formName,
      email: formEmail,
      message: formMessage,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === "true") {
        form["name"].value = "";
        form["email"].value = "";
        form["message"].value = "";
        window.alert(
          `Thank you, ${formName}\n\nI look forward to connecting in the near future!`
        );
      }
    })
    .catch((error) => console.log(error));
  // */
}

function inputFocus(e) {
  e.preventDefault();

  let inputBox = e.currentTarget;
  let inputLabel = inputBox.previousElementSibling;

  if (inputLabel.classList.value) {
    inputLabel.classList.remove("active");
  } else {
    inputLabel.classList.add("active");
  }

  if (inputBox.value) {
    inputLabel.classList.add("active");
  }
}

function contactForm() {
  return (
    <form
      className="visitorForm"
      name="visitorForm"
      action="https://formsubmit.co/8783ffa2f15a5fa5983ea372cf049382"
      method="POST"
      onSubmit={sendMail}
    >
      <input type="hidden" name="_subject" value="Let Connect in Tech!" />
      <input
        type="hidden"
        name="_autoresponse"
        value="Thanks for sending me a message. I look forward to connecting in the near future"
      />

      <div className="formTitle">
        <h1>GET IN TOUCH</h1>
      </div>

      <div className="formInput">
        <label htmlFor="name">Name</label>
        <input
          className="shortInput"
          required
          name="name"
          id="name"
          type="text"
          onFocus={inputFocus}
          onBlur={inputFocus}
        />
      </div>
      <div className="formInput">
        <label htmlFor="email">Email</label>
        <input
          className="shortInput"
          name="email"
          id="email"
          type="email"
          onFocus={inputFocus}
          onBlur={inputFocus}
        />
      </div>
      <div className="formInput" id="messageBox">
        <label htmlFor="message">Message</label>
        <textarea
          className="longInput"
          name="message"
          id="message"
          onFocus={inputFocus}
          onBlur={inputFocus}
        ></textarea>
      </div>
      <div className="formInput" id="submitButton">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
