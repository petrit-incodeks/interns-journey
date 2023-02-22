import React from "react";

export default function Todo(props) {
  return (
    <div>
      <button>X</button>
      <li>{props.task}</li>
    </div>
  );
}
