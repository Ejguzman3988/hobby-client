const initialState = {
  errors: [],
  login: false,
  email: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGING":
      return { ...state, login: false };
    case "SUCCESS":
      return { ...state, login: true, email: action.email };
    case "ERRRORS":
      return { ...state, login: false, errors: action.errors };
    default:
      return state;
  }
};
