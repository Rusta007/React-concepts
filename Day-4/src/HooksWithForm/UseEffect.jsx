import React, { useState, useEffect } from 'react';

const MyFormmm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load initial data for the form here
    // For example, you could fetch the data from an API and set the state variables
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Reset form here
    setName('');
    setEmail('');
    setMessage('');
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

export default MyFormmm;


// In this example, useEffect is used to load initial data for the form. The useEffect hook takes two arguments: a function that will run when the component mounts, and an array of dependencies that determines when the effect should run. In this case, the dependencies array is empty, so the effect will only run once when the component mounts.

// The handleSubmit function is called when the form is submitted, and logs the values of the state variables to the console. You can modify this function to handle the form data in your own application. In this example, the form is reset by setting the state variables back to their initial empty values after the form is submitted.