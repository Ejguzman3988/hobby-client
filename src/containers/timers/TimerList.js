import React, { useEffect } from "react";
import TimerCard from "../../components/timers/TimerCard";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../components/NavBar";
import { fetchTimers } from "../../actions/Timers";
import Button from "@material-ui/core/Button";
import TimerPie from "./TimerPie";

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
// Add all timers.total_time
// return result

export const TimerList = (props) => {
  useEffect(() => {
    props.fetchTimers({ id: props.id, option: "/daily" });
  }, []);
  const classes = useStyles();
  if (props.loading) {
    return <div>Loading...</div>;
  } else {
    const timers = props.timers.map((timer, i) => {
      return <TimerCard key={i} timer={timer} user_id={props.id} />;
    });

    return (
      <div>
        <h3>Today</h3>
        <h4>TOTAL TIME : {totalTime(props.timers)}</h4>
        <TimerPie timers={props.timers} />
        <Button color="inherit">
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

        <ol>{timers}</ol>
      </div>
    );
  }
};

const mapStateFromProps = (state) => {
  return {
    timers: state.timersReducer.timers,
    loading: state.timersReducer.loading,
    id: state.sessionsReducer.id,
  };
};

export default connect(mapStateFromProps, { fetchTimers })(TimerList);
