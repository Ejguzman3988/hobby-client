import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "../NavBar";
// import { makeStyles } from "@material-ui/core/styles";

const TimerCard = ({
  timer: { id, name, category, start_time, end_time, total_time, date },
}) => {
  const classes = useStyles();

  return (
    <li>
      <div>
        <NavLink className={classes.link} to={`/timers/${id}`}>
          {name} - {date}
        </NavLink>
        <p>Category: {category}</p>
        <p>Start: {start_time.split("T")[1]}</p>
        {end_time ? <p>End: {end_time.split("T")[1]}</p> : <p></p>}
        <p>Total: {total_time / 3600} HRS</p>
      </div>
    </li>
  );
};

export default TimerCard;
