import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoSelector, markComplete } from "../store/reducers/TodosSlice";
import TodoForm from "./TodoForm";

const Todos = () => {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();

  const toggleTodoCompleted = (todoId) => {
    dispatch(markComplete(todoId));
  };

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleTodoCompleted.bind(this, todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
