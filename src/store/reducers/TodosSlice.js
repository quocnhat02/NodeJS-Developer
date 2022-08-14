import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    ],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodos.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
  },
});

// Reducer
const todosReducer = todosSlice.reducer;

// Selector
export const todoSelector = (state) => state.todosReducer.allTodos;

// Action export
export const { addTodo } = todosSlice.actions;

export default todosReducer;
