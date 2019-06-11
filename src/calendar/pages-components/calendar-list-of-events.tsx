import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { FunctionComponent, useState, useEffect } from "react";
import { Link } from "@reach/router";
import { IEventsRepository } from "../interfaces/events-repository";
import { CalendarEventData } from "../interfaces/calendar-event-data";

import $ from "jquery";
import Popper from "popper.js";
import { render } from "react-dom";

import * as moment from "moment";
import CalendarEvent from "./calendar-event";

const friendlyDateTime = (eventDateTime: Date): string => {
  const eventStartTime = moment.utc(eventDateTime.toString());
  const currentTime = moment.utc(new Date().toString());

  const diffInHours = eventStartTime.diff(currentTime, "h");
  if (diffInHours < 24) return `in ${diffInHours} hours`;

  const diffInDays = eventStartTime.diff(currentTime, "day");
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
  const [currentDescriptionId, setCurrentDescriptionId] = useState<
    string | null
  >(null);
  useEffect(() => {
    const fetchData = async () => {
      const events = await props.repository.getListOfEvents();
      setData({ events: events });
    };
    fetchData();
  }, [props]);

  return (
    <>
      <div className="container">
        <ul className="list-inline border-bottom border-danger">
          <i className="list-inline-item fa fa-calendar" />
          <h3 className="list-inline-item p-2">{props.header}</h3>
        </ul>

        <ul className="list-group">
          {data.events.map(event => (
            <li
              className="list-group-item"
              key={event.id}
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => setCurrentDescriptionId(event.id)}
            >
              {event.title} - {friendlyDateTime(event.dateStart)}
            </li>
          ))}
        </ul>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <CalendarEvent
                repository={props.repository}
                id={currentDescriptionId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarListOfEvents;
