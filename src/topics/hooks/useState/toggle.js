import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "ON 🔆" : "OFF 🌙"}
      </button>
    </div>
  );
}

export default Toggle;
