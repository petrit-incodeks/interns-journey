import React from "react";
import "../style/solutions.css";

export default function Todo({ removeTodo, id, task, completed, toggleTodo }) {
  const handleRemove = () => removeTodo(id);
  const handleToggle = () => toggleTodo(id);

  return (
    <div>
      <button onClick={handleRemove}>X</button>
      <li
        className={completed ? "Todo-task-completed" : ""}
        onClick={handleToggle}
      >
        {task}
      </li>
    </div>
  );
}
