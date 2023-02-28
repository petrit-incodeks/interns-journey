import React, { useState } from "react";

function CalculatorApp() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [total, setTotal] = useState(0);

  const add = () => {
    setTotal(parseInt(value1) + parseInt(value2));
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

  //   const handleChangeFirst = (e) => {
  //     const value = e.target.value.replace(/\D/g, "");
  //     setValue1(value);
  //   };
  //   const handleChangeSecond = (e) => {
  //     const value = e.target.value.replace(/\D/g, "");
  //     setValue2(value);
  //   };
  const handleChange = (e, setValue) => {
    const value = e.target.value.replace(/\D/g, "");
    setValue(value);
  };

  return (
    <div>
      <h1>Calculator App</h1>
      <div>
        <input
          type="text"
          placeholder="first number"
          value={value1}
          onChange={(e) => handleChange(e, setValue1)}
        />
        <input
          type="text"
          placeholder="second number"
          value={value2}
          onChange={(e) => handleChange(e, setValue2)}
        />
      </div>
      <div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>

      <h3>Total is : {total}</h3>
    </div>
  );
}

export default CalculatorApp;
