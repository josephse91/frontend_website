import React from "react";

import Widget from "./components/widget";
import store from "./store";

export function Job_App() {
  return <Widget store={store} />;
}
