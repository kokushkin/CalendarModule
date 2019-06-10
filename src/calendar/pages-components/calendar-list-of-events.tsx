import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { FunctionComponent, useState, useEffect } from "react";
import { Link } from "@reach/router";
import { IEventsRepository } from "../interfaces/events-repository";
import { CalendarEventData } from "../interfaces/calendar-event-data";

//I couldn't believe that we have no time difference out of the box.
//But looks like so. If find some nmp package - change this
const friendlyDateTime = (eventDateTime: Date): string => {
  const eventStartTotalMillisecondsUTC = eventDateTime.getTime();
  const currentTotalMillisecondsUTC = new Date().getTime();
  const diffInMs = eventStartTotalMillisecondsUTC - currentTotalMillisecondsUTC;
  const diffInDays = Math.ceil(diffInMs / (1000 * 3600 * 24));
  const diffInHours = Math.ceil(diffInMs / (1000 * 3600));

  if (diffInHours < 24) return `in ${diffInHours} hours`;

  if (diffInDays < 7) return `in ${diffInDays} days`;
  else return eventDateTime.toString();
};

interface Props {
  header: string;
  repository: IEventsRepository;
}

interface StateEventsData {
  events: CalendarEventData[];
}

const CalendarListOfEvents: FunctionComponent<Props> = props => {
  const [data, setData] = useState<StateEventsData>({ events: [] });
  useEffect(() => {
    const fetchData = async () => {
      const events = await props.repository.getListOfEvents();
      setData({ events: events });
    };
    fetchData();
  }, [props]);

  return (
    <div className="container">
      <ul className="list-inline border-bottom border-danger">
        <i className="list-inline-item fa fa-calendar" />
        <h3 className="list-inline-item p-2">{props.header}</h3>
      </ul>

      <ul className="list-group">
        {data.events.map(event => (
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
