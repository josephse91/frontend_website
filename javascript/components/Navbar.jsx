import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LinkedInLogo, GithubLogo } from "./svgComponent";
import { MenuButton, toggleMenu } from "./menuButton";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navsection" id="navleft">
        <MenuButton />
        <div className="menuOptions" onClick={toggleMenuSystem}>
          <NavLink to="home" className="navButton">
            <h1>Home</h1>
          </NavLink>
          <NavLink to="about" className="navButton">
            <h1>About</h1>
          </NavLink>
          <NavLink to="portfolio" className="navButton">
            <h1>Portfolio</h1>
          </NavLink>
          <NavLink to="contact" className="navButton">
            <h1>Contact Me</h1>
          </NavLink>
        </div>
      </div>
      <div className="navsection" id="navmid">
        <NavLink to="/" id="introButton">
          <div id="self_logo">SJ</div>
        </NavLink>
      </div>
      <div className="navsection" id="navright">
        <p id="nametag">
          Serge-Edouard <br />
          Joseph
        </p>
        <div className="navSocials">
          <LinkedInLogo />
          <GithubLogo />
        </div>
      </div>
    </div>
  );
}

function toggleMenuSystem(e) {
  let windowSize = window.innerWidth;
  let menuOptions = e.currentTarget;

  if (windowSize < 800 && menuOptions) {
    toggleMenu(null);
    menuOptions ? menuOptions.classList.toggle("change") : null;
  }
  return;
}

export default Navbar;
