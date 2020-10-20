import React, { useEffect } from "react";
import TimerCard from "../../components/timers/TimerCard";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useStyles } from "../../components/NavBar";
import { fetchTimers } from "../../actions/Timers";
import Button from "@material-ui/core/Button";

export const TimerList = (props) => {
  useEffect(() => {
    props.fetchTimers({ id: props.id, option: "/weekly" });
  }, []);
  const classes = useStyles();
  if (props.loading) {
    return <div>Loading...</div>;
  } else {
    const timers = props.timers
      .sort()
      .reverse()
      .map((timer, i) => {
        return <TimerCard key={i} timer={timer} />;
      });

    return (
      <div>
        <h3>This Week: </h3>
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
