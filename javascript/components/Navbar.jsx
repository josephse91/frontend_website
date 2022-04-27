import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LinkedInLogo, GithubLogo } from "./svgComponent";

function Navbar() {
  function introNavigate(e) {
    e.preventDefault();
    console.log("hello");
    navigate = useNavigate();

    navigate("/");
    return;
  }

  return (
    <div className="navbar">
      <div className="navsection" id="navleft">
        <NavLink to="home" className="navButton">
          Home
        </NavLink>
        <NavLink to="about" className="navButton">
          About
        </NavLink>
        <NavLink to="portfolio" className="navButton">
          Portfolio
        </NavLink>
        <NavLink to="contact" className="navButton">
          Contact Me
        </NavLink>
      </div>
      <div className="navsection" id="navmid">
        <Link to="/" className="Introlink">
          <div id="self_logo">
            <p>S</p>
            <p>J</p>
          </div>
        </Link>
      </div>
      <div className="navsection" id="navright">
        <p id="signature">
          Serge-Edouard <br />
          Joseph
        </p>
        <LinkedInLogo />
        <GithubLogo />
      </div>
    </div>
  );
}

export default Navbar;
