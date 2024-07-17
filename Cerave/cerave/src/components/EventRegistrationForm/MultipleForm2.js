// src/components/MultiStepForm.js
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import EventDetails from './EventInfo';
import Review from './Review';
import Confirmation from './Confirmation';

const MultipleForm2 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventName: '',
    eventDate: '',
    numberOfTickets: '',
  });
  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
    setErrors({ ...errors, [input]: '' });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};
    if (step === 1) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
        valid = false;
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
        valid = false;
      }
    } else if (step === 2) {
      if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email address is invalid';
        valid = false;
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
        valid = false;
      }
      if (!formData.eventName) {
        newErrors.eventName = 'Event name is required';
        valid = false;
      }
      if (!formData.eventDate) {
        newErrors.eventDate = 'Event date is required';
        valid = false;
      }
      if (!formData.numberOfTickets) {
        newErrors.numberOfTickets = 'Number of tickets is required';
        valid = false;
      } else if (isNaN(formData.numberOfTickets) || formData.numberOfTickets <= 0) {
        newErrors.numberOfTickets = 'Please enter a valid number of tickets';
        valid = false;
      }
    }
    setErrors(newErrors);
    return valid;
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    case 2:
      return (
        <EventDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      );
    case 3:
      return (
        <Review
          nextStep={nextStep}
          prevStep={prevStep}
          values={formData}
        />
      );
    case 4:
      return (
        <Confirmation
          values={formData}
        />
      );
    default:
      return null;
  }
};

export default MultipleForm2;
