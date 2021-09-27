import { authReducer } from "./authReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
const rootReducer = (history) =>
  combineReducers({
    user: authReducer,
    router: connectRouter(history),
  });
export default rootReducer;
