import * as React from "react";
import { Router } from "@reach/router";
import CalendarListOfEvents from "./calendar-list-of-events";
import CalendarEvent from "./calendar-event";
import { IEventsRepository } from "../interfaces/events-repository";

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

export default Calendar;
