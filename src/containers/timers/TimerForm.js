import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchNewTimer, createdDone } from "../../actions/Timers";
import Errors from "../sessions/Errors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button, Card, CardMedia } from "@material-ui/core";
import { useStyles } from "../../components/NavBar";
import ArrowDropDownCircleTwoToneIcon from "@material-ui/icons/ArrowDropDownCircleTwoTone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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
    <MenuItem
      style={{
        background: "#c7006b",
        color: "white",
        marginTop: "-10px",
        marginBottom: "-10px",
      }}
    >
      <CardMedia
        key={obj.id}
        primary={obj.category}
        onClick={handleSelect}
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          height: "60px",
          width: "100%",
          fontSize: "30px",
          fontFamily: "'Nunito', sans-serif",
          textShadow:
            "0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black",
        }}
        image={`/images/${obj.category}.jpg`}
        title={`${obj.id}`}
      >
        {obj.category}
      </CardMedia>
    </MenuItem>
  ));

  return (
    <Card className={classes.form}>
      <Errors errors={props.errors} />
      <CardMedia
        className={classes.card}
        style={{
          backgroundColor: "beige",
          position: "fixed",
          left: "333px",
          paddingTop: "10%",
          paddingLeft: "5%",
          paddingRight: "5%",
          marginLeft: "3%",
          marginTop: "2%",
          border: "10px",
          borderColor: "black",
        }}
      >
        <h2 style={{ marginTop: "-100px", marginLeft: "-30px" }}>
          Create Timer
        </h2>
        <form
          noValidate
          autoComplete="off"
          style={{
            position: "absolute",
            textAlign: "left",
          }}
        >
          <h3 style={{ display: "inline-block", marginRight: "30px" }}>
            Name:{" "}
          </h3>
          <TextField
            name="name"
            id="standard-basic"
            label="Name"
            value={name}
            onChange={handleOnChange}
          />
          <h3 style={{ marginRight: "30px" }}>
            {"Category:"}
            <Button
              name="category"
              id="category"
              label="Category"
              value="Pick a Category"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleClick}
              onChange={handleOnChange}
              className={classes.link}
              style={{ marginLeft: "30px", background: "#c70039" }}
            >
              Pick a Category
              <ArrowDropDownCircleTwoToneIcon />
            </Button>
          </h3>
          <br />
          <Button
            className={classes.link}
            onClick={handleOnClick}
            style={{
              marginTop: "45%",
              width: "100%",
            }}
            endIcon={<CloudUploadIcon />}
          >
            Create Timer
          </Button>
        </form>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
        >
          {renderItems}
        </Menu>
      </CardMedia>
      <CardMedia
        image={`/images/form-image.jpg`}
        title={`form-image`}
        style={{
          width: "50%",
          height: "100%",
          marginLeft: "35%",
          position: "fixed",
          opacity: "80%",
        }}
      ></CardMedia>
    </Card>
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
