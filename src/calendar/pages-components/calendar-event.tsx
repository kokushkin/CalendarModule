import React, { useState, useEffect, FunctionComponent } from "react";
import { IEventsRepository } from "../interfaces/events-repository";
import { CalendarEventDataDescription } from "../interfaces/calendar-event-data";

interface Props {
  id: string;
  repository: IEventsRepository;
}

interface StateEventsDescriptionData {
  eventDescription: CalendarEventDataDescription;
}

const CalendarEvent: FunctionComponent<Props> = props => {
  const [data, setData] = useState<StateEventsDescriptionData | undefined>({
    eventDescription: undefined
  });
  useEffect(() => {
    const fetchData = async () => {
      const eventDescription = await props.repository.getEventDescription(
        props.id
      );
      setData({ eventDescription: eventDescription });
    };
    fetchData();
  }, [props]);

  if (data.eventDescription === undefined) return <div>Progress...</div>;

  return (
    <section className="container mt-2">
      <section className="row border-bottom bg-light border-ligh-3">
        <div className="col-sm-8">
          <img
            src={data.eventDescription.imageAddress}
            alt={data.eventDescription.title}
            className="img-fluid"
          />
        </div>
        <div className="col-sm-4">
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
      <section className="row border-bottom border-light-3 align-items-center">
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
        <div className="col-md-8">
          <div
            className="container p-3"
            dangerouslySetInnerHTML={{
              __html: data.eventDescription.description
            }}
          />
        </div>
        <div className="col-md-4">
          <section className="container">
            <div className="row">
              <div className="col-sm-6 col-md-12 p-3">
                <h6 className="h6">DATE AND TIME</h6>
                <div className="text-muted">
                  <div>{data.eventDescription.dateStart.toString()} - </div>
                  <div>{data.eventDescription.dateEnd.toString()} </div>
                </div>
                <a href="">Add to calendar</a>
              </div>
              <div className="col-sm-6 col-md-12 p-3">
                <h6 className="h6">LOCATION</h6>
                <div className="text-muted">
                  <div>{data.eventDescription.address}</div>
                  <div>{data.eventDescription.addAddress}</div>
                  <div>{data.eventDescription.city}</div>
                  <div>{data.eventDescription.postCode}</div>
                  <div>{data.eventDescription.country}</div>
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

export default CalendarEvent;
