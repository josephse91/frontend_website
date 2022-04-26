import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftNav">
        <NavLink to="home" className="navButton">
          Home
        </NavLink>
        <NavLink to="about" className="navButton">
          About
        </NavLink>
        <NavLink to="portfolio" className="navButton">
          Portfolio
        </NavLink>
      </div>
      <div className="midNav">Picture</div>
      <div className="rightNav">
        <NavLink to="contact" className="navButton">
          Contact Me
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
