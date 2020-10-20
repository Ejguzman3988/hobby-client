import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "../NavBar";
import Clock from "./Clock";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { RootRef } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

const TimerCard = ({
  timer: { id, name, category, start_time, end_time, total_time, date },
}) => {
  const themes = ["work"];
  const classes = useStyles();
  const cate = themes.includes(category) ? category : "card";
  return (
    <Card className={classes[cate]}>
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
