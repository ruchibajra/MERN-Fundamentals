// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ values }) => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Confirmation</h1>
      <p className="text-center">Thank you for registering! Here are your details:</p>
      <ul className="list-disc list-inside mt-4">
        <li>First Name: {values.firstName}</li>
        <li>Last Name: {values.lastName}</li>
        <li>Email: {values.email}</li>
        <li>Phone: {values.phone}</li>
        <li>Event Name: {values.eventName}</li>
        <li>Event Date: {values.eventDate}</li>
        <li>Number of Tickets: {values.numberOfTickets}</li>
      </ul>
    </div>
  );
};

export default Confirmation;
