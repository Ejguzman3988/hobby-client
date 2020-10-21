import { PieChart } from "react-minimal-pie-chart";
import React from "react";
import { useStyles } from "../../components/NavBar";
import Box from "@material-ui/core/Box";
import { Data } from "../Data";
import { connect } from "react-redux";

const totalTime = (timers) => {
  let total = 0;
  timers.forEach((timer) => (total += timer.total_time));
  // const totMin = total / 60; // => 60 mins
  // const HR = Math.floor(totMin / 60);
  // const MIN = ((total / 60) % 60).toLocaleString("en-US", {
  //   minimumIntegerDigits: 2,
  //   useGrouping: false,
  // });
  return total / 60;
};

const TimerPie = (props) => {
  const classes = useStyles();
  const titles = [];

  return (
    <Box className={classes.box}>
      <PieChart
        // center={[50, 50]}
        data={returnTotals(props.timers, props.categories)}
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
      {console.log(returnTotals(props.timers, props.categories))}
    </Box>
  );
};

const separateTimers = (timers, categories) => {
  const sepTimers = [];
  let timerArray = [];
  for (let cat of categories) {
    for (let timer of timers) {
      if (timer.category === cat.category) {
        timerArray.push(timer);
      }
    }
    sepTimers.push(timerArray);
    timerArray = [];
  }
  return sepTimers;
};

const returnTotals = (timers, categories) => {
  const arrayOfTimers = separateTimers(timers, categories);
  const arrayOfTotals = [];
  arrayOfTimers.forEach((array) =>
    arrayOfTotals.push({
      category: array[0] ? array[0].category : undefined,
      title: array[0] ? array[0].category : undefined,
      value: totalTime(array),
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    })
  );
  return arrayOfTotals;
};

const mapStateToProps = (state) => {
  return {
    timers: state.timersReducer.timers,
    categories: state.timersReducer.categories,
  };
};

export default connect(mapStateToProps)(TimerPie);
