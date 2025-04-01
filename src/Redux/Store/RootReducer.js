// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "../Features/Weather/WeatherSlice";

const appReducer = combineReducers({
  weather: weatherReducer,
});

// Root reducer to handle reset action
const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
