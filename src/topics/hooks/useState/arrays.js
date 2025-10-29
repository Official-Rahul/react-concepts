import React, { useState } from "react";

function Arrays() {
  const [toLearn, setToLearn] = useState(["Learn React"]);
  const [item, setItem] = useState("");

  function addItem() {
    setItem("");
    setToLearn((prev) => [...prev, item]);
  }

  function itemChange(e) {
    setItem(e.target.value);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Arrays</h2>
      <input type="text" value={item} onChange={itemChange} />
      <button onClick={addItem}>Add</button>
      <ul>
        {toLearn.map((entry) => (
          <li>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default Arrays;
