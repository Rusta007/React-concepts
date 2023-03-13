import React, { useState } from 'react';

const MyFormm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormm;

// In this example, useState is used to create state variables for the name, email, and message inputs in the form. The value prop of each input is set to the corresponding state variable, and the onChange prop is set to a function that updates the state variable with the new value of the input.

// The handleSubmit function is called when the form is submitted, and logs the values of the state variables to the console. You can modify this function to handle the form data in your own application.