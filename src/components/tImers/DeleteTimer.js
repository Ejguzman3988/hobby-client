import React from "react";

import { useStyles } from "../NavBar";
import { connect } from "react-redux";
import { deleteTimer } from "../../actions/Timers";
import { withRouter } from "react-router-dom";

const DeleteTimer = (props) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    props.deleteTimer({ user_id: props.user_id, id: props.id });
    alert("Successfully deleted timer!");
    props.history.push("/");
  };

  const classes = useStyles();
  return (
    <div>
      <form
        style={{ background: "#efcdde" }}
        className={classes.container}
        noValidate
      >
        <button className={classes.delete} onClick={handleOnClick}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default withRouter(connect(null, { deleteTimer })(DeleteTimer));
