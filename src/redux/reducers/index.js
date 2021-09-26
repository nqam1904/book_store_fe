import { authReducer } from "./authReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authReducer,
});
export { rootReducer };
