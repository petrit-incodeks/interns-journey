import React from "react";
import HelloWorld from "./HelloWorld";

function Solution1(props) {
  return (
    <div>
      <h1>Solution for assignment #{props.assignmentId}</h1>
      <HelloWorld />
    </div>
  );
}

export default Solution1;
