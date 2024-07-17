import React, { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", subject:"", message:"" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.subject) tempErrors.subject = "Subject is required";
    if (!formValues.message) tempErrors.message = "Message is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      alert("Form submitted successfully!");
      setFormValues({ name: "", email: "", subject: "", message: ""});
      // handle form submission
    }
  };

  return (
    <>
      <div class="p-4 my-10 mx-auto max-w-xl bg-white font-[sans-serif]">
        <h1 class="text-3xl text-gray-800 font-extrabold text-center">
          Contact us
        </h1>
        <form class="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          {errors.name && <p className="text-red-600 text-sm italic">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
          {errors.email && <p className="text-red-600 text-sm italic">{errors.email}</p>}

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          />
            {errors.subject && <p className="text-red-600 text-sm italic">{errors.subject}</p>}

          <textarea
            placeholder="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            rows="6"
            class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
          ></textarea>
            {errors.message && <p className="text-red-600 text-sm italic">{errors.message}</p>}

          <button
            type="submit"
            class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
