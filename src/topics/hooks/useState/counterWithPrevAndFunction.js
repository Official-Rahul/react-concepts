import React, { useState } from "react";

function CounterWithPrevAndFunction() {
  const [count, setCount] = useState(0);
  function increment5() {
    // setCount(count + 1); not recommended, as react use batch updated and count's value will be same in all setCount
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
  }
  function decrement5() {
    // setCount(count - 1); not recommended, as react use batch updated and count's value will be same in all setCount
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment5}>Increment 5</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={decrement5}>Decrement 5</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterWithPrevAndFunction;
