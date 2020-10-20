import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStyles } from "../NavBar";

export default function Clock(props) {
  const classes = useStyles();
  return (
    <Typography component="div" variant="body1">
      <Box component="span" m={1} className={classes.clock}>
        {props.total_time}
      </Box>
    </Typography>
  );
}
