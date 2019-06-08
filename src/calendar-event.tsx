import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

interface Props {}

const CalendarEvent: React.FunctionComponent<Props> = props => {
  return (
    <section className="container">
      <section className="row">
        <div className="col-8">
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61629369%2F292847611496%2F1%2Foriginal.20190503-073319?w=800&auto=compress&rect=0%2C132%2C2048%2C1024&s=28743c48e1c692d3646bbf6554fc1b55"
            alt="Customer Hospitality event"
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <h6 className="h6">Nov 17</h6>
          <h4 className="dispay-4 text-left">
            Customer Hospitality event
            <br />
            <small className="text-muted">by Ioanna Perikleous (BSM-CY)</small>
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
              <i class="fa fa-download" />
            </button>
            <button className="btn">
              <i class="fa fa-bookmark-o" />
            </button>
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-success">REGISTER</button>
        </div>
      </section>
      <section className="row">
        <div className="col-8">
          <p>\u200b</p>
          <p>
            <strong>BSM Involvement&#58; Host</strong>
          </p>
          <p>
            <strong>Location&#58;&#160;Hamburg</strong>
          </p>
          <p>
            <strong>Date&#58; 06 June, 2019</strong>
          </p>
        </div>
        <div className="col-4">
          <section>
            <h6 className="h6">DATE AND TIME</h6>
            <div>Sat, 17 Nov 2018, 18.00 - </div>
            <div>Sun, 18 Nov 2018, 00.30 - </div>
            <a href="">Add to calendar</a>
          </section>
          <section>
            <h6 className="h6">LOCATION</h6>
            <div>Vorsetzen 54</div>
            <div>Hamburg</div>
            <div>20459 </div>
            <div>Germany</div>
            <a href="">View Map</a>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CalendarEvent;
