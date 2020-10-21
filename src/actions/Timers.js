import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory();
const LOADING = { type: "LOADING" };
const BASE_URL = "http://localhost:3001";

export const deleteTimer = ({ user_id, id, history }) => {
  return (dispatch) => {
    fetch(BASE_URL + "/users/" + user_id + "/timers/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "TIMER_ERRORS",
          error: [data],
        })
      );
  };
};

export const updateTimer = ({ user_id, id, start, end }) => {
  return (dispatch) => {
    fetch(BASE_URL + "/users/" + user_id + "/timers/" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        start_time: start,
        end_time: end,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "UPDATE_TIMER",
          timer: data,
        })
      );
  };
};

export const categories = ({ id }) => {
  return (dispatch) => {
    fetch(BASE_URL + "/users/" + id + "/categories")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "LOAD_CATEGORIES",
          categories: data,
        })
      );
  };
};

export const createdDone = () => {
  return (dispatch) => {
    dispatch({ type: "CREATED_DONE" });
  };
};

export const fetchTimers = ({ id, option }) => {
  return (dispatch) => {
    dispatch(LOADING);
    fetch(BASE_URL + "/users/" + id + option)
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
