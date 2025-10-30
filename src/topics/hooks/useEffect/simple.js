import React, { useEffect, useState } from "react";

function Simple() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Simple Count: " + count);
  }); // without dependency runs every render

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Simple Counter Use Effect: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Simple;
