import React from "react";

function MenuButton() {
  return (
    <div className="menuBarcontainer" onClick={toggleMenu}>
      <div className="menuBarCase">
        <div className="menuBar1"></div>
        <div className="menuBar2"></div>
        <div className="menuBar3"></div>
      </div>
    </div>
  );
}

function toggleMenu(e) {
  let button;
  let menuOptions = document.getElementsByClassName("menuOptions")[0];
  if (e) {
    e.preventDefault();
    button = e.currentTarget;
  } else {
    button = document.getElementsByClassName("menuBarcontainer")[0];
  }

  button.classList.toggle("change");
  e ? menuOptions.classList.toggle("change") : null;
  return;
}

export { MenuButton, toggleMenu };
