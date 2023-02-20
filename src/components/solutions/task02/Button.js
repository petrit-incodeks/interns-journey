import React, { useState } from "react";

function Button() {
  const [click, setIsClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setIsClicked(!click)}>
        {click ? "clicked" : "click"}{" "}
      </button>
    </div>
  );
}

export default Button;
