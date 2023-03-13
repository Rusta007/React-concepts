import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload };
    case 'updateEmail':
      return { ...state, email: action.payload };
    case 'updateMessage':
      return { ...state, message: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${state.name}, Email: ${state.email}, Message: ${state.message}`);
    // Reset form here
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={state.name} onChange={(event) => dispatch({ type: 'updateName', payload: event.target.value })} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={state.email} onChange={(event) => dispatch({ type: 'updateEmail', payload: event.target.value })} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={state.message} onChange={(event) => dispatch({ type: 'updateMessage', payload: event.target.value })} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseReducer;

// In this example, useReducer is used to manage the state of the form. The initial state is defined as an object with name, email, and message properties. A formReducer function is defined to handle state updates based on different actions.

// The handleSubmit function is called when the form is submitted, and logs the values of the state variables to the console. The form is reset by dispatching a reset action to the reducer.

// The form input fields are rendered using the current state of the form, and the dispatch function is used to update the state based on user input. The dispatch function takes an action object with a type property that corresponds to a specific case in the formReducer function, and a payload property that contains the new value for the corresponding form field.