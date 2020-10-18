const initialState = {
  login: false,
  username: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGING":
      return { ...state, login: false };
    case "SUCCESS":
      return { ...state, login: true, username: action.username };
    default:
      return state;
  }
};
