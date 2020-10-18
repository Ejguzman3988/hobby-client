import timersReducer from "./timersReducers";
import sessionsReducer from "./sessionsReducer";

import { combineReducers } from "redux";

export default combineReducers({
  timersReducer,
  sessionsReducer,
});
