import React, { useEffect, useState } from "react";

function Simple() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count: " + count);
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Simple;
