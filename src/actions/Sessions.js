const LOGGING = { type: "LOGGING" };
const BASE_URL = "http://localhost:3001";

export const LoggingOut = () => {
  return (dispatch) => {
    dispatch({ type: "LOGGING_OUT" });
  };
};

export const fetchLogging = ({ email, password }) => {
  // POST /users/sign_in
  return (dispatch) => {
    dispatch(LOGGING);
    fetch(BASE_URL + "/users/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw resp;
        }
        return resp.json();
      })
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch((errors) => {
        errors.text().then((error) => {
          dispatch({ type: "ERRRORS", errors: error });
        });
      });
  };
};

export const fetchRegister = ({ email, password }) => {
  // POST /users
  return (dispatch) => {
    dispatch(LOGGING);
    fetch(BASE_URL + "/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw resp;
        }
        return resp.json();
      })
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch((errors) => {
        errors.text().then((error) => {
          dispatch({ type: "ERRRORS", errors: error });
        });
      });
  };
};
