import React from "react";
import Simple from "./simple";
import RunOnce from "./runOnce";
import DependencyArray from "./dependencyArray";
import Hr from "../../../helpers/hr";
import WindowSize from "./cleanupFunction";

function UseEffect() {
  return (
    <div>
      <h2>Use Effect</h2>
      <p>“Do this after React finishes painting the UI, and do it again if these things change.”</p>
      <Simple />
      <Hr />
      <DependencyArray />
      <Hr />
      <RunOnce />
      <Hr />
      <WindowSize />
    </div>
  );
}

export default UseEffect;
