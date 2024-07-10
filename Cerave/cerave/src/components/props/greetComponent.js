import React from "react";

const GreetComponent = ({name}) => {
  const styles = {
    divStyle: {

      backgroundColor: "black",
      padding: "10px",
      boxShadow: '2px 2px 2px 2px #ccc',
      borderRadius: "5px",
      margin: "10px"
    },
  };

  return <div style = {styles.divStyle} className="text-blue-700">Hello {name}! we are learning props in react.</div>;
  
};

export default GreetComponent;
