import React from "react";
import Counter from "./counter";
import CounterWithLast from "./counterWithLast";
import CounterWithPrevAndFunction from "./counterWithPrevAndFunction";
import String from "./string";
import Object from "./object";
import Toggle from "./toggle";
import Arrays from "./arrays";
import Hr from "../../../helpers/hr";

function UseState() {
  return (
    <div>
      <h2>Use Effect</h2>
      <p>“Do this after React finishes painting the UI, and do it again if these things change.”</p>
      <Hr />
      <Toggle />
      <Hr />
      <Counter />
      <Hr />
      <CounterWithLast />
      <Hr />
      <CounterWithPrevAndFunction />
      <Hr />
      <String />
      <Hr />
      <Object />
      <Hr />
      <Arrays />
    </div>
  );
}

export default UseState;
