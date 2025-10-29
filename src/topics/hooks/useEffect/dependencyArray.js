import React, { useEffect, useState } from "react";

function DependencyArray() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count: " + count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default DependencyArray;
