import React, { useState } from "react";
import FormValidation from "../FormValidation/FormValidation";

const ProductComponent = () => {
  const [username, setUsername] = useState("");
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <>
      <div className="text-center bg-blue-950 text-white text-xl p-2 ">
        {" "}
        Add Product{" "}
      </div>

      {/* FORM */}

      {/* <h1>{username}</h1>
      <form className="m-4 bg-blue-100 w-3/6 flex flex-col justify-center align-center" action="">
        <label className="text-1xl" htmlFor="username">
          {" "}
          Username:{" "}
        </label>{" "}
        <input
          onChange={(event) => setUsername(event.target.value)}
          className="border-2 border-blue-950 p-2 rounded-lg"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
        <br /> 
        <label className="text-1xl" htmlFor="username">
          {" "}
          Email:{" "}
        </label>{" "}
        <input
          onChange={(event) => setUsername(event.target.value)}
          className="border-2 border-blue-950 p-2 rounded-lg"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
        <br /> 
        <div>
          <label className="text-1xl" htmlFor="username">
            {" "}
            Gender:{" "}
          </label>{" "}
          <br />
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label htmlFor="option1"> Male </label>
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label htmlFor="option1"> Female </label>
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label htmlFor="option1"> Others </label>
          <br />
          <br />

          <button className="bg-blue-900 text-white rounded p-1">Submit</button>
        </div>
      </form> */}

      <FormValidation/>
    </>
  );
};

export default ProductComponent;
