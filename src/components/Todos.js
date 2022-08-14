import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../store/reducers/TodosSlice";

const Todos = () => {
  const todos = useSelector(todoSelector);

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
