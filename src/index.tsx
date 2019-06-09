import * as React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import CalendarListOfEvents from "./pages/calendar-list-of-events";
import CalendarEvent from "./pages/calendar-event";
import { IEventsRepository } from "./interfaces/events-repository";
import { MockEventsRepository } from "./repositories/mock-events-repository";

import "./styles.css";

interface Props {
  header: string;
  repository: IEventsRepository;
}

const Calendar: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <Router>
        <CalendarListOfEvents
          path="/"
          header={props.header}
          repository={props.repository}
        />
        <CalendarEvent
          path="/calendar-event/:id"
          repository={props.repository}
        />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(
  <Calendar header="UPCOMING EVENTS" repository={new MockEventsRepository()} />,
  rootElement
);
