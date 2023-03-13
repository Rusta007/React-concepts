import React, { useState, useContext } from 'react';
import MyContext from './MyContext';

const UseContextForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { submitForm } = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Pass form data to context here
    submitForm(name, email, message);
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

export default UseContextForm;


// In this example, useContext is used to access a submitForm function from a context object. The context object is created using the createContext function and exported as MyContext from a separate file. The submitForm function can be defined in the same file as the context object, and it should handle the form data in your own application.

// The handleSubmit function is called when the form is submitted, and logs the values of the state variables to the console. The form data is then passed to the submitForm function from the context object. In this example, the form is reset by setting the state variables back to their initial empty values after the form is submitted.