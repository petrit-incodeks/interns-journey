import React from "react";

function Image() {
  const url =
    'https://images.unsplash.com/photo-1601425276965-bdb69f1f3977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"';
  return (
    <div>
      <img style={{ height: "300px", width: "500px" }} src={url} alt="lake" />
    </div>
  );
}

export default Image;
