import React, { useState } from "react";

function CounterWithLast() {
  const [count, setCount] = useState(0);
  const [prev, setPrev] = useState(0);

  function increment() {
    setCount(count+1);
    setPrev(count);
  }

  function decrement() {
    setCount(count-1);
    setPrev(count);
  }

  function reset() {
    setCount(0);
    setPrev(count);
  }

  function last() {
    setCount(prev);
    setPrev(count);
  }

  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={last}>Previous</button>
    </div>
  );
}

export default CounterWithLast;
