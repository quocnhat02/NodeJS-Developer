import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [
      {
        id: 1,
        title: "Viec 1",
        completed: false,
      },
      {
        id: 2,
        title: "Viec 2",
        completed: false,
      },
      {
        id: 3,
        title: "Viec 3",
        completed: false,
      },
      {
        id: 4,
        title: "Viec 4",
        completed: false,
      },
      {
        id: 5,
        title: "Viec 5",
        completed: false,
      },
    ],
  },
});

// Reducer
const todosReducer = todosSlice.reducer;

// Selector
export const todoSelector = (state) => state.todosReducer.allTodos;

export default todosReducer;
