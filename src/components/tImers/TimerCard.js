import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "../NavBar";
import Clock from "./Clock";
// import { makeStyles } from "@material-ui/core/styles";

const TimerCard = ({
  timer: { id, name, category, start_time, end_time, total_time, date },
}) => {
  const classes = useStyles();

  return (
    <li>
      <div className={classes.link}>
        <NavLink className={classes.link} to={`/timers/${id}`}>
          {name} - {date}
        </NavLink>
        <p>Category: {category}</p>
        <Clock total_time={total_time} />
      </div>
    </li>
  );
};

export default TimerCard;
