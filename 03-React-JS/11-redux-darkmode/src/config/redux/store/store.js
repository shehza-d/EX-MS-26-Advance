import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice";
import darkModeReducer from "../reducers/darkModeSlice";

export const store = configureStore({
  reducer: {
    todoSlice: todoReducer,
    darkModeSlice: darkModeReducer,
  },
});
