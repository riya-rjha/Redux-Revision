import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todos", // name of slice that updates the state
  initialState: [], // initial state of toDo list = empty array
  reducers: {
    // functions that need to be performed
    addToDo: (state, action) => {
      const newTask = {
        id: nanoid(), // generates new id
        completed: false, // initially task is incomplete
        text: action.payload, // takes info given in the form of todo text
      };
      state.push(newTask);
    },
    // ['Redux','JS','ReactJS','GSoC'] -> state
    // find id of Redux === current id hit
    toggle: (state, action) => {
      const todoText = state.find((todo) => todo.id === action.payload);
      if (todoText) {
        todoText.completed = !todoText.completed; // change status of completion
      }
    },
    deleteToDo: (state, action) => {
      const checkId = state.findIndex(
        (todo) => todo.id === action.payload // find index that needs to be deleted
      );
      if (checkId !== -1) {
        state.splice(checkId, 1); // delete at checkId index & elements to be deleted = 1
      }
    },
  },
});

// export reducers individually through their actions
export const { addToDo, deleteToDo, toggle } = todoSlice.actions;

// export combined reducer
export default todoSlice.reducer;
