import { combineReducers } from "redux";
import foodReducers from "./foodReducers";

export default combineReducers({
  menu: foodReducers
});
