import * as React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

export const Event = () => {
  return (
    <div>
      <div>Name</div>
      <div>Description</div>
      <Link to="/">Back</Link>
    </div>
  );
};
