import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import profile from "./profile";
import loadingBar from "./loadingBar";

export default combineReducers({
  auth,
  user,
  profile,
  loadingBar,
});
