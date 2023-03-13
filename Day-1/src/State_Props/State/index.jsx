import React, { useState } from 'react';      		// This line imports the React library and the useState hook from the react package.

function MyComponent() {			        // This line defines a new function component called MyComponent.
  const [count, setCount] = useState(0);	        // This line declares a new state variable called count using the useState hook. It initializes count to 0 and 							       // sets setCount as the function to update count.	

  const handleClick = () => {				// This line declares a new function called handleClick that updates the count state variable by callin   	setCount(count + 1);				  // setCount and passing in the current value of count plus 1.
 
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
