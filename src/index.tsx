import * as React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Event from "./event";
import Events from "./events";

import "./styles.css";

interface Props {}

const App: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <Router>
        <Events path="/" />
        <Event path="/event" />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
