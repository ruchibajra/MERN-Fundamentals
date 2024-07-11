import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  // using state
  const [isOn, setIsOn] = useState(false);

  // fn to toggle the state
  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <ChildComponent isOn={isOn} toggleState={toggleState} />
    </div>
  );
};

export default ParentComponent;
