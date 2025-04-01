// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer"; // Adjust the path as necessary

const store = configureStore({
  reducer: rootReducer,
});

export default store;
