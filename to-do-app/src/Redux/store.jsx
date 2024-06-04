import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.jsx";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
