import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchNewTimer, createdDone } from "../../actions/Timers";
import Errors from "../sessions/Errors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const TimerForm = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleOnChange = (e) => {
    if (e.target.name === "name") {
      return setName(e.target.value);
    } else if (e.target.name === "category") {
      return setCategory(e.target.value);
    }
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    props.fetchNewTimer({
      name,
      category,
      id: props.id,
    });
  };
  if (props.created) {
    props.createdDone();
    props.history.push("/timers");
  }
  return (
    <div>
      <Errors errors={props.errors} />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          name="name"
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handleOnChange}
        />
        <TextField
          name="category"
          id="standard-basic"
          label="Category"
          value={category}
          onChange={handleOnChange}
        />
        <br />
        <button onClick={handleOnClick}>Create Timer</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    id: state.sessionsReducer.id,
    errors: state.timersReducer.errors,
    created: state.timersReducer.created,
    timers: state.timersReducer.timers,
  };
};

export default connect(mapStateToProps, { fetchNewTimer, createdDone })(
  TimerForm
);
