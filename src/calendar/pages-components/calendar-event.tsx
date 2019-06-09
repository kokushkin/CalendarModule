import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";
import { IEventsRepository } from "../interfaces/events-repository";

interface Props {
  id: string;
  repository: IEventsRepository;
}

const CalendarEvent: React.FunctionComponent<Props> = props => {
  let eventData = props.repository.getEventDescription(props.id);

  return (
    <section className="container mt-2">
      <section className="row border-bottom bg-light border-light">
        <div className="col-8">
          <img
            src={eventData.imageAddress}
            alt={eventData.title}
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <div className="container mt-2">
            <div className="row">
              <h6 className="h6">{eventData.dateStart.toDateString()}</h6>
            </div>
            <div className="row">
              <h4 className="dispay-4 text-left">
                {eventData.title}
                <br />
                <small className="text-muted">{eventData.organizer}</small>
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
          dangerouslySetInnerHTML={{ __html: eventData.description }}
        />
        <div className="col-4">
          <section className="m-3">
            <h6 className="h6">DATE AND TIME</h6>
            <div className="text-muted">
              <div>{eventData.dateStart.toString()} - </div>
              <div>{eventData.dateEnd.toString()} </div>
            </div>
            <a href="">Add to calendar</a>
          </section>
          <section className="m-3">
            <h6 className="h6">LOCATION</h6>
            <div className="text-muted">
              <div>{eventData.address}</div>
              <div>{eventData.addAddress}</div>
              <div>{eventData.city}</div>
              <div>{eventData.postCode}</div>
              <div>{eventData.country}</div>
            </div>
            <a href="">View Map</a>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CalendarEvent;
