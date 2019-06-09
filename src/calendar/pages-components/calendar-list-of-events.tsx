import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";
import { IEventsRepository } from "../interfaces/events-repository";

interface Props {
  header: string;
  repository: IEventsRepository;
}

const CalendarListOfEvents: React.FunctionComponent<Props> = props => {
  //I couldn't believe that we have no time difference out of the box.
  //But looks like so. If find some nmp package - change this
  const friendlyDateTime = (eventDateTime: Date): string => {
    const eventStartTotalMillisecondsUTC = eventDateTime.getTime();
    const currentTotalMillisecondsUTC = new Date().getTime();
    const diffInMs =
      eventStartTotalMillisecondsUTC - currentTotalMillisecondsUTC;
    const diffInDays = Math.ceil(diffInMs / (1000 * 3600 * 24));
    const diffInHours = Math.ceil(diffInMs / (1000 * 3600));

    if (diffInHours < 24) return `in ${diffInHours} hours`;

    if (diffInDays < 7) return `in ${diffInDays} days`;
    else return eventDateTime.toString();
  };

  return (
    <div className="container">
      <ul className="list-inline border-bottom border-danger">
        <i className="list-inline-item fa fa-calendar" />
        <h3 className="list-inline-item p-2">{props.header}</h3>
      </ul>

      <ul className="list-group">
        {props.repository.getListOfEvents().map(event => (
          <li className="list-group-item" key={event.id}>
            <Link to={`/calendar-event/${event.id}`}>
              {event.title} - {friendlyDateTime(event.dateStart)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarListOfEvents;
