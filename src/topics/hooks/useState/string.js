import React, { useState } from "react";

function String() {
  const [name, setName] = useState("Rahul");
  function nameChange(e) {
    setName(e.target.value);
  }

  function showName() {
    alert(name);
  }

  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <label>Name</label>
      <input value={name} onChange={nameChange} />
      <button onClick={showName}>Show</button>
    </div>
  );
}

export default String;
