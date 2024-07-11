import React, { useState } from "react";
import CounterChildComponent from "./CounterChildComponent";

const CounterParentComponent = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <CounterChildComponent counter={counter} increment={increment} decrement={decrement}/>
    </div>
  );
};

export default CounterParentComponent;
