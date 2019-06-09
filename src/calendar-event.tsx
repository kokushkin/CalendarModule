import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";
import { CalendarEventData } from "./calendar-event-data";

const CalendarEvent: React.FunctionComponent<CalendarEventData> = props => {
  let eventData: CalendarEventData = {
    id:
      "0x0102004F76F51FFC644B478A8E4A1B07B44C4E002DC2C6EC8858CA4EBAD82AC879C32C1B",
    title: "Customer Hospitality event",
    organizer: "Ioanna Perikleous (BSM-CY)",
    dateStart: new Date("2019-06-06T07:00:00Z"),
    dateEnd: new Date("2019-06-06T14:00:00Z"),
    description:
      "<p>\u200b</p><p><strong>BSM Involvement&#58; Host</strong></p><p><strong>Location&#58;&#160;Hamburg</strong></p><p><strong>Date&#58; 06 June, 2019</strong></p>",
    country: "Germany",
    city: "Hamburg",
    address: "Vorsetzen 54",
    addAddress: null,
    postCode: "20459 ",
    imageAddress:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61629369%2F292847611496%2F1%2Foriginal.20190503-073319?w=800&auto=compress&rect=0%2C132%2C2048%2C1024&s=28743c48e1c692d3646bbf6554fc1b55"
  };

  return (
    <section className="container">
      <section className="row">
        <div className="col-8">
          <img
            src={eventData.imageAddress}
            alt={eventData.title}
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <h6 className="h6">{eventData.dateStart.toDateString()}</h6>
          <h4 className="dispay-4 text-left">
            {eventData.title}
            <br />
            <small className="text-muted">{eventData.organizer}</small>
          </h4>
          <button className="btn btn-success">
            <Link to="/" className="text-white">
              BBACK TO LIST
            </Link>
          </button>
        </div>
      </section>
      <section className="row">
        <div className="col-8">
          <div className="btn-group btn-group-lg">
            <button className="btn">
              <i className="fa fa-download" />
            </button>
            <button className="btn">
              <i className="fa fa-bookmark-o" />
            </button>
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-success">REGISTER</button>
        </div>
      </section>
      <section className="row">
        <div
          className="col-8"
          dangerouslySetInnerHTML={{ __html: eventData.description }}
        />
        <div className="col-4">
          <section>
            <h6 className="h6">DATE AND TIME</h6>
            <div>{eventData.dateStart.toString()} - </div>
            <div>{eventData.dateEnd.toString()} </div>
            <a href="">Add to calendar</a>
          </section>
          <section>
            <h6 className="h6">LOCATION</h6>
            <div>{eventData.address}</div>
            <div>{eventData.addAddress}</div>
            <div>{eventData.city}</div>
            <div>{eventData.postCode}</div>
            <div>{eventData.country}</div>
            <a href="">View Map</a>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CalendarEvent;
