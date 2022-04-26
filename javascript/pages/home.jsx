import React from "react";
import { useLocation } from "react-router-dom";

class Home extends React.Component {
  currentLocation(e) {
    let scroll = [e.deltaX, e.deltaY];

    if (scroll[1] > 0) {
      window.location.hash = "";
      console.log("If Statement");
    }
    console.log(scroll);
  }

  render() {
    return (
      <div>
        <h1 onWheel={this.currentLocation}>This will be the home page</h1>
        <br />
      </div>
    );
  }
}

export default Home;
