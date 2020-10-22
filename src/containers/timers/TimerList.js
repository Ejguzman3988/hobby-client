import React, { useEffect } from "react";
import TimerCard from "../../components/timers/TimerCard";
import { connect } from "react-redux";
import { fetchTimers } from "../../actions/Timers";

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
  if (props.loading) {
    return <div>Loading...</div>;
  } else {
    const timers = props.timers
      .sort()
      .reverse()
      .map((timer, i) => {
        return <TimerCard key={i} timer={timer} user_id={props.id} />;
      });

    return (
      <div>
        <h3>Today</h3>
        <h4>TOTAL TIME : {totalTime(props.timers)}</h4>

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
