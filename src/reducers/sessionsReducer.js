const initialState = {
  errors: [],
  login: false,
  email: "",
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGING":
      return { ...state, login: false, errors: [] };
    case "LOGGING_OUT":
      return {
        ...state,
        login: false,
        email: "",
        id: null,
      };
    case "SUCCESS":
      return {
        ...state,
        login: true,
        email: action.payload.email,
        id: action.payload.id,
      };
    case "ERRRORS":
      return { ...state, login: false, errors: action.errors };
    default:
      return state;
  }
};
