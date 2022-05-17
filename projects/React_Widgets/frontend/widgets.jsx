import React from "react";

import AutoComplete from "./auto";
import Clock from "./clock";
import Weather from "./weather";
import Tabs from "./tabs";

const names = [
  "Abba",
  "Barney",
  "Barbara",
  "Jeff",
  "Jenny",
  "Sarah",
  "Sally",
  "Xander",
];

const panes = [
  { title: "one", content: "I am the first" },
  { title: "two", content: "Second pane here" },
  { title: "three", content: "Third pane here" },
];

export function Widgets_App() {
  return (
    <div className="widgetApp">
      <Clock />
      <Weather />
      <div className="interactive">
        <Tabs panes={panes} />
        <AutoComplete names={names} />
      </div>
    </div>
  );
}
