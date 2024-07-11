import React from "react";

const ChildComponent = ({ isOn, toggleState, message, updateMessage }) => {
  return (
    <div>
      <h1>1. TOGGLE COMPONENT</h1>

      <p className="mx-5">The switch is {isOn ? "ON" : "OFF"}</p>
      <button
        className=" my-2 mx-5 color: bg-blue-500 text-white "
        onClick={toggleState}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default ChildComponent;
