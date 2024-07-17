// src/components/Review.js
import React from 'react';

const Review = ({ nextStep, prevStep, values }) => {
  const continueStep = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Review Your Details</h1>
      <ul className="list-disc list-inside">
        <li>First Name: {values.firstName}</li>
        <li>Last Name: {values.lastName}</li>
        <li>Email: {values.email}</li>
        <li>Phone: {values.phone}</li>
        <li>Event Name: {values.eventName}</li>
        <li>Event Date: {values.eventDate}</li>
        <li>Number of Tickets: {values.numberOfTickets}</li>
      </ul>
      <div className="flex justify-between mt-4">
        <button
          onClick={back}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
        <button
          onClick={continueStep}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Review;
