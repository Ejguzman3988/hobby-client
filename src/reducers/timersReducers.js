const initialState = {
  errors: [],
  loading: true,
  timers: [],
  created: false,
  categories: [],
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
    case "LOAD_CATEGORIES":
      return {
        ...state,
        categories: state.categories.concat(action.categories),
      };
    case "UPDATE_TIMER":
      const indexOfTimer = state.timers.findIndex(
        (timer) => timer.id === action.timer.id
      );
      const first = state.timers.slice(0, indexOfTimer);
      const second = state.timers.slice(indexOfTimer + 1, state.timers.length);

      return {
        ...state,
        timers: first.concat(action.timer, second),
      };
    default:
      return state;
  }
};
