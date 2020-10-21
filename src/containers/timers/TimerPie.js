import { PieChart } from "react-minimal-pie-chart";
import React from "react";
import { useStyles } from "../../components/NavBar";
import Box from "@material-ui/core/Box";
import { Data } from "../Data";

const totalTime = (timers) => {
  let total = 0;
  timers.forEach((timer) => (total += timer.total_time));
  const totMin = total / 60; // => 60 mins
  const HR = Math.floor(totMin / 60);
  const MIN = ((total / 60) % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return `${HR}:${MIN}`;
};

const TimerPie = (props) => {
  const classes = useStyles();
  const titles = [];

  return (
    <Box className={classes.box}>
      <PieChart
        // center={[50, 50]}
        data={Data}
        labelPosition={0}
        lengthAngle={360}
        lineWidth={100}
        paddingAngle={0}
        radius={50}
        startAngle={0}
        viewBoxSize={[100, 100]}
        label={({ dataEntry }) => {
          titles.push(dataEntry.value);
          return titles;
        }}
      />
      {totalTime(props.timers)}
    </Box>
  );
};

export default TimerPie;
