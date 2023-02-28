import React, { useState } from "react";

function CalculatorApp() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [total, setTotal] = useState(0);

  const add = () => {
    setTotal(value1 + value2);
    setValue1("");
    setValue2("");
  };

  const subtract = () => {
    setTotal(value1 - value2);
    setValue1("");
    setValue2("");
  };

  const multiply = () => {
    setTotal(value1 * value2);
    setValue1("");
    setValue2("");
  };

  const divide = () => {
    if (value2 !== 0) {
      setTotal(value1 / value2);
    } else {
      alert("Cannnot divide by 0, put another number in");
    }
    setValue1("");
    setValue2("");
  };

  return (
    <div>
      <h1>Calculator App</h1>

      <input
        type="text"
        placeholder="first number"
        value={value1}
        onChange={(e) => setValue1(+e.target.value)}
      />
      <input
        type="text"
        placeholder="second number"
        value={value2}
        onChange={(e) => setValue2(+e.target.value)}
      />

      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <p>Total is :{total}</p>
    </div>
  );
}

export default CalculatorApp;
