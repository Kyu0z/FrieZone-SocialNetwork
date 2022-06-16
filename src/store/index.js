import { createStore, combineReducers } from "redux";
import Mode from "./mode/mode";
import {reducer as auth} from "./auth";

export default createStore(
  combineReducers({
    mode: Mode,
    auth,
  })
);
