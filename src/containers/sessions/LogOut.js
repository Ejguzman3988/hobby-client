import React from "react";
import { connect } from "react-redux";
import { LoggingOut } from "../../actions/Sessions";
import { NavLink } from "react-router-dom";

const LogOut = ({ LoggingOut }) => {
  return (
    <div>
      <h3>Are you sure?</h3>
      <button onClick={() => LoggingOut()}>Yes</button>{" "}
      <NavLink to="/">
        <button>No</button>
      </NavLink>
    </div>
  );
};

export default connect(null, { LoggingOut })(LogOut);
