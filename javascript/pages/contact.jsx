import React from "react";
import {
  LinkedInLogo,
  GithubLogo,
  phoneIcon,
  mailIcon,
} from "../components/svgComponent";

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
        <div>
          {phoneIcon()}
          <p>(516) 670-4896</p>
        </div>
        <div>
          {mailIcon()}
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

function contactForm() {
  return (
    <form className="visitorForm">
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
        />
      </div>
      <div className="formInput">
        <label htmlFor="email">Email</label>
        <input className="shortInput" name="email" id="email" type="text" />
      </div>
      <div className="formInput" id="messageBox">
        <label htmlFor="message">Message</label>
        <textarea className="longInput" name="message" id="message"></textarea>
      </div>
      <div className="formInput" id="submitButton">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
