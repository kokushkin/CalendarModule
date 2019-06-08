import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

interface Props {}

const Event: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <div>Name</div>
      <div>Description</div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Event;
