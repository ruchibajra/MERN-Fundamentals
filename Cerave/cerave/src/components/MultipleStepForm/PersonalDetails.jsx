import React, { useState } from "react";

const PersonalDetails = ({ nextStep, formValues, setFormValues }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required!";
    if (!formValues.phone) tempErrors.phone = "Phone number is required!";
    if (!formValues.email) {
      tempErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center">
      <p className="text-3xl font-bold  text-red">Enter your personal details below:</p> <br/>

      <form>
        <div>
          <label className=" text-gray-700 text-sm font-bold" htmlFor="name">Full Name</label> <br />
          <input
            className="border-2 shadow  rounded py-2 px-3 text-gray-700 w-96"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p className="text-red-600 text-sm italic">{errors.name}</p>
        </div> <br />

        <div>
          <label className=" text-gray-700 text-sm font-bold"  htmlFor="email">Email</label> <br />
          <input
            className="border-2 shadow rounded  py-2 px-3 text-gray-700 w-96"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="text-red-600 text-sm italic">{errors.email}</p>
        </div> <br />

        <div>
          <label className=" text-gray-700 text-sm font-bold"  htmlFor="phone">Phone</label> <br />
          <input
            className="border-2 shadow  rounded  py-2 px-3 text-gray-700 w-96"
            type="text"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-600 text-sm italic">{errors.phone}</p>}
        </div> <br />

        <button onClick={handleContinue} className="bg-blue-800 text-white p-1 rounded-lg m-1">
          Continue
        </button>
      </form>
    </div>  
      
    </div>
  
  );
};

export default PersonalDetails;
