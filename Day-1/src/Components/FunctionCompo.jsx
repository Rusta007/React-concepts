import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Alice" message="Welcome to my website!" />
      <Greeting name="Bob" message="Thanks for visiting!" />
    </div>
  );
}


import React from 'react';

export function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default App 
