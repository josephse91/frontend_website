import React from "react";

function SvgComponents() {
  return (
    <div className="svg-div">
      <svg className="svg-screen">
        <defs>
          <linearGradient id="brown_grade" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="95%" stopColor="#d79922" />
          </linearGradient>
          <linearGradient id="teal_grade" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="95%" stopColor="#4056a1" />
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

function LinkedInLogo() {
  function logoToggle(e) {
    e.preventDefault();

    let linkedInInner = document.getElementsByClassName("linkedin_inner");
    let linkedInOuter = document.getElementsByClassName("linkedin_outer");

    if (linkedInInner[0].classList.length < 2) {
      linkedInInner[0].classList.add("linkedin_inner_hover");
      linkedInOuter[0].classList.add("linkedin_outer_hover");
    } else {
      linkedInInner[0].classList.remove("linkedin_inner_hover");
      linkedInOuter[0].classList.remove("linkedin_outer_hover");
    }

    return;
  }

  return (
    <a
      className="nav_logo"
      onMouseEnter={logoToggle}
      onMouseLeave={logoToggle}
      // onMouseLeave={logoToggle}
      href="https://www.linkedin.com/in/serge-edouard-joseph/"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 48 48"
        // fill="#000000"
      >
        <path
          className="linkedin_outer"
          // fill="#0288D1"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          // fill="#FFF"
          className="linkedin_inner"
          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
        ></path>
      </svg>
    </a>
  );
}

function GithubLogo() {
  return (
    <a
      href="https://github.com/josephse91"
      target="_blank"
      className="nav_logo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="github_logo"
        width="38"
        height="38"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 640 640"
      >
        <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
      </svg>
    </a>
  );
}

function Bullet() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1280.000000pt"
      height="1280.000000pt"
      viewBox="0 0 1280.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet"
      id="bullet"
    >
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M314 12790 c-195 -41 -335 -242 -309 -445 6 -51 383 -811 3040 -6125
2901 -5801 3036 -6069 3082 -6110 61 -54 157 -99 231 -106 118 -13 258 40 334
125 31 35 771 1508 3070 6106 2924 5849 3029 6062 3035 6126 15 173 -76 326
-237 403 -59 27 -74 30 -160 30 -79 -1 -104 -5 -150 -26 -30 -13 -1359 -894
-2953 -1956 l-2897 -1932 -2897 1932 c-1594 1062 -2923 1942 -2953 1956 -61
27 -168 37 -236 22z"
        />
      </g>
    </svg>
  );
}

function phoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="contactIcon"
      viewBox="0 0 512 512"
    >
      <title>Call</title>
      <path
        d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </svg>
  );
}

function mailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="contactIcon"
      viewBox="0 0 512 512"
    >
      <title>Mail</title>
      <rect
        x="48"
        y="96"
        width="416"
        height="320"
        rx="40"
        ry="40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M112 160l144 112 144-112"
      />
    </svg>
  );
}

export { SvgComponents, LinkedInLogo, GithubLogo, Bullet, phoneIcon, mailIcon };
