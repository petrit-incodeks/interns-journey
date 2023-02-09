import React from "react";

export default function NumberList() {
  let maxValue = 10;
  let arr = [];
  for (let i = 1; i <= maxValue; i++) {
    arr.push(i);
  }
  return (
    <div>
      <h1>{`${arr}`}</h1>
    </div>
  );
}
