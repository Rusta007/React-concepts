import React, { useRef } from 'react';

const UseRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}, Message: ${messageRef.current.value}`);
    // Reset form here
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <label>
        Message:
        <textarea ref={messageRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseRef;
