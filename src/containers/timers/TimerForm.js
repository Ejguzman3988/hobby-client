import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchNewTimer, createdDone } from "../../actions/Timers";
import Errors from "../sessions/Errors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import { useStyles } from "../../components/NavBar";
import ArrowDropDownCircleTwoToneIcon from "@material-ui/icons/ArrowDropDownCircleTwoTone";

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
      <form noValidate autoComplete="off">
        <TextField
          name="name"
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handleOnChange}
        />
        <Button
          name="category"
          id="category"
          label="Category"
          value="Pick a Category"
          // onChange={handleOnChange}
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
          onChange={handleOnChange}
          className={classes.link}
        >
          Pick a Category
          <ArrowDropDownCircleTwoToneIcon />
        </Button>
        <br />
        <Button className={classes.link} onClick={handleOnClick}>
          Create Timer
        </Button>
      </form>
      <Menu id="menu" anrEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
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
