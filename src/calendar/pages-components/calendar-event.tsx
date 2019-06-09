import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";
import { IEventsRepository } from "../interfaces/events-repository";
import { CalendarEventDataDescription } from "../interfaces/calendar-event-data";

interface Props {
  id: string;
  repository: IEventsRepository;
}

interface StateEventsDescriptionData {
  eventDescription: CalendarEventDataDescription;
}

const CalendarEvent: React.FunctionComponent<Props> = props => {
  const [data, setData] = useState<StateEventsDescriptionData | undefined>({
    eventDescription: undefined
  });
  useEffect(() => {
    const fetchData = async () => {
      const eventDescription = await props.repository.getEventDescription(
        props.id
        //"0x0102004F76F51FFC644B478A8E4A1B07B44C4E002DC2C6EC8858CA4EBAD82AC879C32C1B"
      );
      setData({ eventDescription: eventDescription });
    };
    fetchData();
  }, [props]);

  if (data.eventDescription === undefined) return <div>Progress...</div>;

  return (
    <section className="container mt-2">
      <section className="row border-bottom bg-light border-light">
        <div className="col-8">
          <img
            src={data.eventDescription.imageAddress}
            alt={data.eventDescription.title}
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <div className="container mt-2">
            <div className="row">
              <h6 className="h6">
                {data.eventDescription.dateStart.toDateString()}
              </h6>
            </div>
            <div className="row">
              <h4 className="dispay-4 text-left">
                {data.eventDescription.title}
                <br />
                <small className="text-muted">
                  {data.eventDescription.organizer}
                </small>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="row border-bottom border-light align-items-center">
        <div className="col-8">
          <div className="btn-group btn-group-lg">
            <button className="btn">
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
        <div
          className="col-8"
          dangerouslySetInnerHTML={{
            __html: data.eventDescription.description
          }}
        />
        <div className="col-4">
          <section className="m-3">
            <h6 className="h6">DATE AND TIME</h6>
            <div className="text-muted">
              <div>{data.eventDescription.dateStart.toString()} - </div>
              <div>{data.eventDescription.dateEnd.toString()} </div>
            </div>
            <a href="">Add to calendar</a>
          </section>
          <section className="m-3">
            <h6 className="h6">LOCATION</h6>
            <div className="text-muted">
              <div>{data.eventDescription.address}</div>
              <div>{data.eventDescription.addAddress}</div>
              <div>{data.eventDescription.city}</div>
              <div>{data.eventDescription.postCode}</div>
              <div>{data.eventDescription.country}</div>
            </div>
            <a href="">View Map</a>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CalendarEvent;
