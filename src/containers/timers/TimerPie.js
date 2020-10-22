import { PieChart } from "react-minimal-pie-chart";
import React from "react";
import { useStyles } from "../../components/NavBar";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import TimerLegend from "./TimerLegend";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Data } from "../Data";

const categories = Data;

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
  let titles = [];
  return (
    <Box
      boxShadow={3}
      bgcolor="background.paper"
      m={0}
      p={0}
      style={{ width: "2rem", height: "10rem" }}
      className={classes.box}
    >
      <PieChart
        // center={[50, 50]}
        className={classes.pie}
        data={returnTotals(props.timers, categories)}
        labelPosition={0}
        lengthAngle={360}
        lineWidth={100}
        paddingAngle={0}
        radius={50}
        startAngle={0}
        viewBoxSize={[100, 100]}
        label={({ dataEntry }) => {
          titles.push(dataEntry);
          return true;
        }}
      />
      <TimerLegend dataEntries={titles} />

      <Box
        className={classes.nav}
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "0px",
          paddingLeft: "40px",
          paddingBottom: "200%",
        }}
      >
        <Button>
          <NavLink to="/timers" className={classes.link}>
            Daily
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/timers/weekly" className={classes.link}>
            Weekly
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/timers/monthly" className={classes.link}>
            Monthly{" "}
          </NavLink>
        </Button>
      </Box>
    </Box>
  );
};

const separateTimers = (timers, categories) => {
  const sepTimers = [];
  let timerArray = [];
  for (let cat of categories) {
    timerArray = [];
    for (let timer of timers) {
      if (timer.category === cat.category) {
        timerArray.push(timer);
      }
    }
    sepTimers.push(timerArray);
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
  };
};

export default connect(mapStateToProps)(TimerPie);
