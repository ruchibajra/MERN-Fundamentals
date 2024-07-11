import React, {useState} from "react";
import DisplayChildComponent from "./DisplayChildComponent";

const DisplayParentComponent = () => {
  const [message, setMessage] = useState("Hello Display Component!!!");

  const updateMessage = () => {
    setMessage("HI, the text has been updated!");
  };
  return (
    <div>
      <DisplayChildComponent message={message} updateMessage={updateMessage} />
    </div>
  );
};

export default DisplayParentComponent;
