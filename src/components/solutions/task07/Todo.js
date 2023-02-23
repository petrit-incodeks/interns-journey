import React from "react";
import "../style/solutions.css";

export default function Todo({ removeTodo, id, task, completed, toggleTodo }) {
  const handleRemove = () => removeTodo(id);
  const handleToggle = () => toggleTodo(id);

  return (
    <div className="Todo-todo ">
      <li
        className={completed ? "Todo-task Todo-task-completed" : "Todo-task"}
        onClick={handleToggle}
      >
        {task}
      </li>
      <button className="Todo-button" onClick={handleRemove}>
        X
      </button>
    </div>
  );
}
