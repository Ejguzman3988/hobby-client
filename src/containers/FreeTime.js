import React from "react";
import { useStyles } from "../components/NavBar";
import Clock from "../components/timers/Clock";
import Card from "@material-ui/core/Card";

const FreeTime = (props) => {
  const classes = useStyles();
  const time = parseInt(props.free_time) * 3600;
  return (
    <div className={classes.card}>
      <Card className={classes.word}>FREETIME</Card>
      <Clock total_time={time} />
    </div>
  );
};

export default FreeTime;
