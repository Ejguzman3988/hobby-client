const LOADING = { type: "LOADING" };
const BASE_URL = "http://localhost:3001";

export const fetchTimers = (id) => {
  return (dispatch) => {
    dispatch(LOADING);
    fetch(BASE_URL + "/users/" + id + "/timers")
      .then((resp) => resp.json())
      .then((timers) => dispatch({ type: "LOAD_TIMERS", timers }));
  };
};
