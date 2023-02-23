import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="CounterApp">
      <h1> {count} </h1>
      <div>
        <button onClick={decrement}>-</button>
        {/* <span> {count} </span> */}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
export default CounterApp;
