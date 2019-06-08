import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

interface Props {}

const Events: React.FunctionComponent<Props> = props => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Link to="event">Boat Party - 00/00/00 at 21:00</Link>
      </li>
      <li className="list-group-item">
        <Link to="/event">Cristmas Party - 00/00/00 at 21:00</Link>
      </li>
      <li className="list-group-item">
        <Link to="/event">Managment Metting - 00/00/00 at 21:00</Link>
      </li>
      <li className="list-group-item">
        <Link to="/event">1/4 Presentation - 00/00/00 at 21:00</Link>
      </li>
      <li className="list-group-item">
        <Link to="/event">Kids Party - 00/00/00 at 21:00</Link>
      </li>
    </ul>
  );
};

export default Events;
