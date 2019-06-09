import * as React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import CalendarListOfEvents from "./pages/calendar-list-of-events";
import CalendarEvent from "./pages/calendar-event";

import "./styles.css";

interface Props {}

const App: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <Router>
        <CalendarListOfEvents path="/" />
        <CalendarEvent path="/calendar-event/:id" />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
