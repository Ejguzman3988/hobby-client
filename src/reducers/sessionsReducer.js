const initialState = {
  // TODO: CHANGE ID,LOGIN,&FREETIME TO DEFAULT

  errors: [],
  login: true,
  email: "",
  id: 1,
  free_time: null,
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
        free_time: action.payload.free_time,
      };
    case "ERRRORS":
      return { ...state, login: false, errors: action.errors };
    default:
      return state;
  }
};
