import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory();
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

export const fetchNewTimer = ({ name, category, id }) => {
  return (dispatch) => {
    dispatch(LOADING);
    fetch(BASE_URL + "/users/" + id + "/timers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        category,
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw resp;
        }
        return resp.json();
      })
      .then((timer) => {
        dispatch({ type: "CREATE_TIMER", timer });
      })
      .catch((errors) => {
        errors.text().then((error) => {
          dispatch({ type: "TIMER_ERRORS", errors: error });
        });
      });
  };
};
