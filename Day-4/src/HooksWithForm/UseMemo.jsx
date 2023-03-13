import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Reset form here
    setName('');
    setEmail('');
    setMessage('');
  };

  const disabled = useMemo(() => {
    return !name || !email || !message;
  }, [name, email, message]);

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
      <button type="submit" disabled={disabled}>Submit</button>
    </form>
  );
};

export default UseMemo;
