import React, { useEffect, useState } from "react";

function DependencyArray() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rahul");
  useEffect(() => {
    console.log("Dependency Array Count: " + count);
  }, [count]); // this effect will only work when count changes, and does not depend on other state variables

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input type="text" value={name} onChange={changeName} />
      <h3>Dependency Array: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default DependencyArray;
