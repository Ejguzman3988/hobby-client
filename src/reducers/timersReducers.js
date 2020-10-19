const initialState = {
  errors: [],
  loading: true,
  timers: [],
  created: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, created: false };
    case "LOAD_TIMERS":
      return {
        ...state,
        loading: false,
        timers: action.timers,
        created: false,
      };
    case "CREATED_DONE":
      return { ...state, loading: false, created: false };
    case "CREATE_TIMER":
      return {
        ...state,
        loading: false,
        timers: [...state.timers, action.timer],
        created: true,
      };
    case "TIMER_ERRORS":
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};
