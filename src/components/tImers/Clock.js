import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "../NavBar";

export default function Clock(props) {
  const classes = useStyles();
  const clockDisplay = () => {
    let time = props.total_time;
    if (time === null) {
      time = 0;
    }
    // time = 5400
    const totMin = time / 60; // => 60 mins
    const HR = Math.floor(totMin / 60);
    const MIN = ((time / 60) % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return `${HR}:${MIN}`;
  };
  clockDisplay();
  return (
    <Typography component="div" variant="body1">
      <Box component="span" m={1} className={classes.clock}>
        {clockDisplay()}
      </Box>
    </Typography>
  );
}
