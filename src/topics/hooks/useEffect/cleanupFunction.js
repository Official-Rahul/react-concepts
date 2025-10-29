import React, { useEffect, useState } from "react";

function CleanupFunction() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count: " + count);
    const timer = setInterval(() => {
      console.log("Tick...");
    }, 1000);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CleanupFunction;
