import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../NavBar";
import { connect } from "react-redux";
import { updateTimer } from "../../actions/Timers";

const formatTime = (time) => {
  let splitTime = time.split(":");
  return splitTime[0] + ":" + splitTime[1];
};

const TimerUpdate = (props) => {
  const [start, setStart] = useState(formatTime(props.start_time));
  const [end, setEnd] = useState(
    props.end_time ? formatTime(props.end_time) : null
  );

  const classes = useStyles();

  const handleOnChange = (event) => {
    if (event.target.name === "start") {
      setStart(event.target.value);
    } else if (event.target.name === "end") {
      setEnd(event.target.value);
    }
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    if (end < start) {
      debugger;
      return alert("Please submit an end date greater than a start date.");
    } else if (start !== null && end !== null) {
      props.updateTimer({ user_id: props.user_id, id: props.id, start, end });
    }
  };

  return (
    <div>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          name="start"
          label="Start Date"
          type="datetime-local"
          defaultValue={start}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleOnChange}
        />
        <TextField
          id="datetime-local"
          name="end"
          label="End Date"
          type="datetime-local"
          defaultValue={end}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>Save</button>
      </form>
    </div>
  );
};

export default connect(null, { updateTimer })(TimerUpdate);
