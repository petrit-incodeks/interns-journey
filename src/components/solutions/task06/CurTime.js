import React, { useEffect, useState } from "react";

export default function CurTime() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);
  return (
    <div>
      <h1>Local Time is : {time}</h1>
    </div>
  );
}
