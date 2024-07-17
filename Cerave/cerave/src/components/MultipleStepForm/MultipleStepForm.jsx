import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EventDetails from "./EventDetails";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({ name: "", email: "", phone: "", eventName: "", eventAddress: "" });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <PersonalDetails nextStep={nextStep} formValues={formValues} setFormValues={setFormValues} />;
    case 2:
      return <EventDetails prevStep={prevStep} formValues={formValues} setFormValues={setFormValues} />;
    default:
      return <div>Invalid Step</div>;
  }
};

export default MultiStepForm;
