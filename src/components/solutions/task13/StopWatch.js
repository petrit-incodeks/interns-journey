import React, { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let interval;
    if (isStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isStarted) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarted]);

  return (
    <div>
      <h1>StopWatch</h1>
      <h2>
        Time: <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span> {("0" + ((time / 10) % 100)).slice(-2)}</span>
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
