import React, { Component } from "react";
import TimerCard from "../../components/timers/TimerCard";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchTimers } from "../../actions/Timers";

export class TimerListMonthly extends Component {
  componentDidMount() {
    this.props.fetchTimers({ id: this.props.id, option: "/monthly" });
  }
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      const timers = this.props.timers
        .sort()
        .reverse()
        .map((timer, i) => {
          return <TimerCard key={i} timer={timer} />;
        });

      return (
        <div>
          <h3>This Month</h3>

          <NavLink to="/timers">Daily</NavLink>
          <NavLink to="/timers/weekly">Weekly</NavLink>
          <NavLink to="/timers/monthly">Monthly </NavLink>

          <ol>{timers}</ol>
        </div>
      );
    }
  }
}

const mapStateFromProps = (state) => {
  return {
    timers: state.timersReducer.timers,
    loading: state.timersReducer.loading,
    id: state.sessionsReducer.id,
  };
};

export default connect(mapStateFromProps, { fetchTimers })(TimerListMonthly);
