import { useRef, useState, useEffect } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <p>Button clicked: {count} times</p>
      <p>Component rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default RenderCounter;
