import React from "react";

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
        <div className="contactForm">{contactForm()}</div>
      </div>
    </div>
  );
}

function myContactInfo() {
  return (
    <div className="myContactInfo">
      <h1>I'D LOVE TO HEAR FROM YOU!</h1>
      <ul>
        <li>Is there a tech event you want to tell me about?</li>
        <li>Want to work on a project together?</li>
        <li>Need any advice learning any of the skills I’ve learned?</li>
        <li>Is there a project you want to see?</li>
      </ul>
      <p>
        I look forward to building relationships within the tech community. Feel
        free to drop a message about anything
      </p>
      <h1>CONTACT INFORMATION</h1>
      <p>(516) 670-4896</p>
      <p>sjoseph.eng@gmail.com</p>
    </div>
  );
}

function contactForm() {
  return (
    <form className="visitorForm">
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
      <div className="formInput">
        <label htmlFor="message">Message</label>
        <textarea className="longInput" name="message" id="message"></textarea>
      </div>
      <div className="formInput" id="submitButton">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
