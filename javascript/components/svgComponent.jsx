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
        <use href="#mycircle" id="c100_5"></use>
        <use href="#mycircle" id="c5_45"></use>
        <use href="#mycircle" id="c90_50"></use>
        <use href="#mycircle" id="c40_25"></use>
        <use href="#mycircle" id="c50_65"></use>
        <use href="#mycircle" id="c120_75"></use>
        <use href="#mycircle" id="c150_30"></use>
        <use href="#mysquare" id="d20_20"></use>
        <use href="#mysquare" id="d35_50"></use>
        <use href="#mysquare" id="d50_7"></use>
        <use href="#mysquare" id="d120_40"></use>
        <use href="#mysquare" id="d25_75"></use>
        <use href="#mysquare" id="d80_70"></use>
        <use href="#mysquare" id="d150_65"></use>
        <use href="#mysquare" id="d130_15"></use>
      </svg>
    </div>
  );
}

export default SvgComponents;
