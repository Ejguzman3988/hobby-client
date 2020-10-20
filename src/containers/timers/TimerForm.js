import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchNewTimer, createdDone } from "../../actions/Timers";
import Errors from "../sessions/Errors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleSelect = (event) => {
    let button = document.getElementById("category");
    button.value = event.target.firstChild.data;
    button.innerHTML = event.target.firstChild.data;
    setAnchorEl(null);
    setCategory(button.value);
  };

  const handleOnChange = (e) => {
    if (e.target.name === "name") {
      return setName(e.target.value);
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

  const renderItems = props.categories.map((obj) => (
    <MenuItem>
      <ListItemText
        key={obj.id}
        primary={obj.category}
        onClick={handleSelect}
      />
    </MenuItem>
  ));

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
        <button
          name="category"
          id="category"
          label="Category"
          value="Pick a Category"
          // onChange={handleOnChange}
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
          onChange={handleOnChange}
        >
          Pick a Category
        </button>
        <br />
        <button onClick={handleOnClick}>Create Timer</button>
      </form>
      <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
        {renderItems}
      </Menu>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    id: state.sessionsReducer.id,
    errors: state.timersReducer.errors,
    created: state.timersReducer.created,
    timers: state.timersReducer.timers,
    categories: state.timersReducer.categories,
  };
};

export default connect(mapStateToProps, { fetchNewTimer, createdDone })(
  TimerForm
);
