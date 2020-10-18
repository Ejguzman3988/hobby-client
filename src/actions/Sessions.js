const LOGGING = { type: "LOGGING" };
const BASE_URL = "http://localhost:3001";

export const fetchLogging = () => {
  // POST /users/sign_in
  return (dispatch) => {
    dispatch(LOGGING);
    fetch(BASE_URL + "/users/sign_in")
      .then((resp) => resp.json())
      .then((email) => dispatch({ type: "SUCCESS", email }));
  };
};

export const fetchRegister = () => {
  // POST /users
  dispatch(LOGGING);
  fetch(BASE_URL + "/users")
    .then((resp) => resp.json())
    .then((email) => dispatch({ type: "SUCCESS", email }));
};

// const initialState = {
//     errors: [],
//     login: false,
//     email: "",
//   };

//   export default (state = initialState, action) => {
//     switch (action.type) {
//       case "LOGGING":
//         return { ...state, login: false };
//       case "SUCCESS":
//         return { ...state, login: true, email: action.email };
//       default:
//         return state;
//     }
//   };
