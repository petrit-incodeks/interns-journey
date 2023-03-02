import React, { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let interval;
    if (isStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
    } else if (!isStarted) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarted]);

  return (
    <div>
      <h1>StopWatch</h1>
      <h2>
        Time: <span>00 : </span>
        <span> 00 : </span>
        <span> {time}</span>
      </h2>
      <div>
        <button onClick={() => setIsStarted(true)}>Start</button>
        <button onClick={() => setIsStarted(false)}>Pause</button>
        <button onClick={() => setIsStarted(false) || setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
