import React, { useEffect, useState } from "react";

function CountDown() {
  const [count, setCount] = useState(10);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(timer);
      setFinished(true);
    }

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <h1>{finished ? "Bye Bye" : `Self Destruct in : ${count}`}</h1>
    </div>
  );
}
export default CountDown;
