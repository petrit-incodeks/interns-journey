import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function NewTodoForm({ create }) {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    create({ task, id: uuidv4(), completed: false });

    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          id="task"
          name="task"
          value={task}
          placeholder="Add a Todo"
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
