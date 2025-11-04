import React, { useEffect, useRef, useState } from "react";

function PrevCounter() {
  const [count, setCount] = useState(0);
  const prev = useRef();

  useEffect(() => {
    prev.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prev.current}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default PrevCounter;
