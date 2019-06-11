import React, { useState, useEffect, FunctionComponent } from "react";
import { IEventsRepository } from "../interfaces/events-repository";
import { CalendarEventDataDescription } from "../interfaces/calendar-event-data";
import { saveAs } from "file-saver";
import * as ics from "ics";
import { bool } from "prop-types";

interface Props {
  id: string;
  repository: IEventsRepository;
}

const CalendarEvent: FunctionComponent<Props> = props => {
  const [eventDescription, setEventDescription] = useState<
    CalendarEventDataDescription | undefined
  >(undefined);
  const [download, setDownload] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const eventDescription = await props.repository.getEventDescription(
        props.id
      );
      setEventDescription(eventDescription);
    };
    fetchData();
  }, [props]);

  useEffect(() => {
    if (download === true) downloadEvent(eventDescription);
    return () => setDownload(false);
  }, [download]);

  if (eventDescription === undefined) return <div>Progress...</div>;

  return (
    <section className="container mt-2">
      <section className="row border-bottom bg-light border-ligh-3">
        <div className="col-sm-8">
          <img
            src={eventDescription.imageAddress}
            alt={eventDescription.title}
            className="img-fluid"
          />
        </div>
        <div className="col-sm-4">
          <div className="container mt-2">
            <div className="row">
              <h6 className="h6">
                {eventDescription.dateStart.toDateString()}
              </h6>
            </div>
            <div className="row">
              <h4 className="dispay-4 text-left">
                {eventDescription.title}
                <br />
                <small className="text-muted">
                  {eventDescription.organizer}
                </small>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="row border-bottom border-light-3 align-items-center">
        <div className="col-8">
          <div className="btn-group btn-group-lg">
            <button className="btn" onClick={() => setDownload(true)}>
              <i className="fa fa-download text-info" />
            </button>
            <button className="btn">
              <i className="fa fa-bookmark-o text-info" />
            </button>
          </div>
        </div>
        <div className="col-4 ">
          <button className="btn btn-success btn-block display-6">
            REGISTER
          </button>
        </div>
      </section>
      <section className="row">
        <div className="col-md-8">
          <div
            className="container p-3"
            dangerouslySetInnerHTML={{
              __html: eventDescription.description
            }}
          />
        </div>
        <div className="col-md-4">
          <section className="container">
            <div className="row">
              <div className="col-sm-6 col-md-12 p-3">
                <h6 className="h6">DATE AND TIME</h6>
                <div className="text-muted">
                  <div>{eventDescription.dateStart.toString()} - </div>
                  <div>{eventDescription.dateEnd.toString()} </div>
                </div>
                <a href="">Add to calendar</a>
              </div>
              <div className="col-sm-6 col-md-12 p-3">
                <h6 className="h6">LOCATION</h6>
                <div className="text-muted">
                  <div>{eventDescription.address}</div>
                  <div>{eventDescription.addAddress}</div>
                  <div>{eventDescription.city}</div>
                  <div>{eventDescription.postCode}</div>
                  <div>{eventDescription.country}</div>
                </div>
                <a href="">View Map</a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

function downloadEvent(eventDescription: CalendarEventDataDescription) {
  const icsEvent = {
    start: [
      eventDescription.dateStart.getFullYear(),
      eventDescription.dateStart.getMonth(),
      eventDescription.dateStart.getDay(),
      eventDescription.dateStart.getHours(),
      eventDescription.dateStart.getMinutes()
    ],
    end: [
      eventDescription.dateEnd.getFullYear(),
      eventDescription.dateEnd.getMonth(),
      eventDescription.dateEnd.getDay(),
      eventDescription.dateEnd.getHours(),
      eventDescription.dateEnd.getMinutes()
    ],
    title: eventDescription.title,
    description: eventDescription.description,
    organizer: { name: eventDescription.organizer }
  };

  ics.createEvent(icsEvent, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }

    var blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${eventDescription.title}.ics`);
  });

  // console.log(`Event "${eventDescription.title}" has downloaded`);
}

export default CalendarEvent;
