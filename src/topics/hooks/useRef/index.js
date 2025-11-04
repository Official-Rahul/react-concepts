import React from "react";
import InputFocus from "./inputFocus";
import Hr from "../../../helpers/hr";
import RenderCounter from "./renderCounter";

function UseRef() {
  return (
    <div>
      <h2>Use Ref</h2>
      <p>
        “useRef is a React Hook that lets you persist values across renders without causing re-renders.”
      </p>
      <Hr />
      <InputFocus />
      <Hr />
      <RenderCounter />
    </div>
  );
}

export default UseRef;
