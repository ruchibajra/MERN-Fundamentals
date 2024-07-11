import React from "react";

const DisplayChildComponent = ({ message, updateMessage }) => {
  return (
    <div>
      <h1>3. DISPLAY COMPONENT</h1>

      <p className=" mx-5 my-2">Current Message: {message}</p>
      <button  className=" my-2 mx-5 color: bg-blue-500 text-white " onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default DisplayChildComponent;
