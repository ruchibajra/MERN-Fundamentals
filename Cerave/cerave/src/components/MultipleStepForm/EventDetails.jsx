import React, { useState } from "react";

const EventDetails = ({ prevStep, formValues, setFormValues }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.eventName) tempErrors.eventName = "Event Name is required!";
    if (!formValues.eventAddress) tempErrors.eventAddress = "Event Address is required!";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission here
      alert("Form submitted successfully!");
      console.log("Submitted Data: ", formValues);

      // Clear the form fields
      setFormValues({ ...formValues, name: "", email: "", phone: "", eventName: "", eventAddress: "" });
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold  text-red">Enter event details below:</p> <br/>

        <form>
          <div>
            <label className=" text-gray-700 text-sm font-bold" htmlFor="eventName">Event Name</label> <br />
            <input
              className="border-2 shadow rounded py-2 px-3 text-gray-700 w-96"
              type="text"
              name="eventName"
              value={formValues.eventName}
              onChange={handleChange}
            />
            <p className="text-red-600 text-sm italic">{errors.eventName}</p>
          </div> <br />

          <div>
            <label className=" text-gray-700 text-sm font-bold"  htmlFor="eventAddress">Event Address</label> <br />
            <input
              className="border-2 shadow rounded  py-2 px-3 text-gray-700 w-96"
              type="text"
              name="eventAddress"
              value={formValues.eventAddress}
              onChange={handleChange}
            />
            <p className="text-red-600 text-sm italic">{errors.eventAddress}</p>
          </div> <br />

          <button onClick={handleBack} className="bg-blue-800 text-white p-1 rounded-lg m-1">
            Back
          </button>
          <button onClick={handleSubmit} className="bg-blue-800 text-white p-1 rounded-lg m-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
