import React from "react";

function SvgComponents() {
  return (
    <div className="svg-div">
      <svg className="svg-screen">
        <defs>
          <linearGradient id="brown_grade" gradientTransform="rotate(45)">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="95%" stop-color="#d79922" />
          </linearGradient>
          <linearGradient id="teal_grade" gradientTransform="rotate(45)">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="95%" stop-color="#4056a1" />
          </linearGradient>
          <rect
            id="mysquare"
            transform="rotate(45)"
            fill="url(#brown_grade)"
          ></rect>
          <circle id="mycircle" fill="url(#teal_grade)"></circle>
        </defs>
        <use href="#mycircle" id="c100_5" x="100em" y="5em"></use>
        <use href="#mycircle" id="c5_45" x="5em" y="45em"></use>
        <use href="#mycircle" id="c90_50" x="90em" y="50em"></use>
        <use href="#mycircle" id="c40_25" x="40em" y="25em"></use>
        <use href="#mycircle" id="c50_65" x="50em" y="65em"></use>
        <use href="#mycircle" id="c120_75" x="120em" y="75em"></use>
        <use href="#mycircle" id="c150_30" x="150em" y="30em"></use>
        <use href="#mysquare" id="d20_20" x="20em" y="20em"></use>
        <use href="#mysquare" id="d35_50" x="35em" y="50em"></use>
        <use href="#mysquare" id="d50_7" x="50em" y="7em"></use>
        <use href="#mysquare" id="d120_40" x="120em" y="40em"></use>
        <use href="#mysquare" id="d25_75" x="25em" y="75em"></use>
        <use href="#mysquare" id="d80_70" x="80em" y="70em"></use>
        <use href="#mysquare" id="d150_65" x="150em" y="65em"></use>
        <use href="#mysquare" id="d130_15" x="130em" y="15em"></use>
      </svg>
    </div>
  );
}

export default SvgComponents;
