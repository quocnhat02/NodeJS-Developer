import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
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
    markComplete(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
    todosFetched(state, action) {
      state.allTodos = action.payload;
    },
  },
});

// Async action creator, action and reducer dispatch
export const getTodos = () => {
  const getTodosAsync = async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      dispatch(todosFetched(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return getTodosAsync;
};

// Reducer
const todosReducer = todosSlice.reducer;

// Selector
export const todoSelector = (state) => state.todosReducer.allTodos;

// Action export
export const { addTodo, markComplete, deleteTodo, todosFetched } =
  todosSlice.actions;

export default todosReducer;
