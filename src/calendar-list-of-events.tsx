import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";
import { MockEventsRepository } from "./events-repository";

interface Props {}

const CalendarListOfEvents: React.FunctionComponent<Props> = props => {
  return (
    <div className="container">
      <ul className="list-inline border-bottom border-danger">
        <i className="list-inline-item fa fa-calendar" />
        <h3 className="list-inline-item p-2">UPCOMING EVENTS</h3>
      </ul>

      <ul className="list-group">
        {new MockEventsRepository().getListOfEvents().map(event => (
          <li className="list-group-item">
            <Link to={`/calendar-event/${event.id}`}>
              {event.title} - {event.dateStart.toString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarListOfEvents;
