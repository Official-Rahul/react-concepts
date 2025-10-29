import React from "react";
import Counter from "./counter";
import CounterWithLast from "./counterWithLast";
import CounterWithPrevAndFunction from "./counterWithPrevAndFunction";
import String from "./string";
import Object from "./object";
import Toggle from "./toggle";
import Arrays from "./arrays";

function UseState() {
  return (
    <div>
      <Toggle />
      <Counter />
      <CounterWithLast />
      <CounterWithPrevAndFunction />
      <String />
      <Object />
      <Arrays />
    </div>
  );
}

export default UseState;
