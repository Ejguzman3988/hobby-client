const initialState = {
  errors: [],
  loading: true,
  timers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOAD_TIMERS":
      return { ...state, loading: false, timers: action.timers };
    case "TIMER_ERROR":
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};
