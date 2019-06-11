import * as React from "react";
import { render } from "react-dom";
import { MockEventsRepository } from "./repositories/mock-events-repository";
import Calendar from "./calendar/components/calendar";

import "./styles.css";

const rootElement = document.getElementById("root");
render(
  <Calendar header="UPCOMING EVENTS" repository={new MockEventsRepository()} />,
  rootElement
);
