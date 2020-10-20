import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "../NavBar";
import Clock from "./Clock";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import { makeStyles } from "@material-ui/core/styles";

const TimerCard = ({
  timer: { id, name, category, start_time, end_time, total_time, date },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <NavLink className={classes.link} to={`/timers/${id}`}>
          {name} - {date}
        </NavLink>
        <p>Category: {category}</p>
        <Clock total_time={total_time} />
      </CardContent>
    </Card>
  );
};

export default TimerCard;
