import React, { useState } from 'react';

const FormValidation = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // destructuring the event -> means it can get both value either name or value or both
    // name can be of name or of email
    const { name, value } = e.target; 
    setFormValues({ ...formValues, [name]: value });
    // spread operator -> ...formValues means it holds the value of name: '', email: ''
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
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
      console.log('Form submitted successfully');
      alert('Form submitted successfully!');
      setFormValues({name:'', email:''});
      // handle form submission
    }
  };

  return (
    <div className='flex justify-center '>
        <form className= 'flex justify-center flex-col w-72 items-center'onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name' className='text-lg text-blue-950 font-bold'>Name</label> <br />
        <input 
          className='border-2  border-blue-950 p-1 rounded-lg'
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor='email' className='text-lg text-blue-950 font-bold'>Email</label> <br />
        <input
          className='border-2 border-blue-950 p-1 rounded-lg'
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div> <br />
      <button className = 'text-bold bg-blue-900 text-white p-2 rounded'type="submit">Submit</button>
        </form>
    </div>
  );
};

export default FormValidation;