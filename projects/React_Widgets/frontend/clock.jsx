import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  UNSAFE_componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  UNSAFE_componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
      <div className="clockContainer">
        <h1 className="clockTitle">Clock</h1>
        <div className="clock">
          <p>
            <span className="clockContent">Time:</span>
            <span className="clockContent">
              {hours}:{minutes}:{seconds} PDT
            </span>
          </p>
          <p className="clockContent">Date: {this.state.time.toDateString()}</p>
        </div>
      </div>
    );
  }
}
