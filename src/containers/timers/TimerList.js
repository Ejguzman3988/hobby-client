import React, { Component } from "react";
import TimerCard from "../../components/timers/TimerCard";
import { connect } from "react-redux";

export class TimerList extends Component {
  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      const timers = this.props.timers.map((timer, i) => {
        return <TimerCard key={i} timer={timer} />;
      });

      return (
        <div>
          <h3>Heres a list of timers</h3>
          <ul>{timers}</ul>
        </div>
      );
    }
  }
}

const mapStateFromProps = (state) => {
  return {
    timers: state.timersReducer.timers,
    loading: state.timersReducer.loading,
  };
};

export default connect(mapStateFromProps)(TimerList);
