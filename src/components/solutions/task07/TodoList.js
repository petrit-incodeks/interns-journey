import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "Walk" }, { task: "run" }]);

  const renderTodos = todos.map((todo) => {
    return <Todo task={todo.task} />;
  });
  return (
    <div>
      <h2>Todo List</h2>
      <ul>{renderTodos}</ul>
    </div>
  );
}
