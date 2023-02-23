import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => setTodos([...todos, newTodo]);
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    return setTodos(updatedTodos);
  };

  const remove = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const renderTodos = todos.map((todo) => {
    return (
      <Todo
        task={todo.task}
        id={todo.id}
        key={todo.id}
        removeTodo={remove}
        completed={todo.completed}
        toggleTodo={toggleComplete}
      />
    );
  });

  return (
    <div className="Todo-todoList">
      <h2>Todo List</h2>
      <ul>{renderTodos}</ul>
      <NewTodoForm create={createTodo} />
    </div>
  );
}
