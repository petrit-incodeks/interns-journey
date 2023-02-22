import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const renderTodos = todos.map((todo) => {
    return <Todo task={todo.task} key={todo.id} />;
  });

  const createTodo = (newTodo) => setTodos([...todos, newTodo]);
  return (
    <div>
      <h2>Todo List</h2>
      <NewTodoForm create={createTodo} />
      <ul>{renderTodos}</ul>
    </div>
  );
}
