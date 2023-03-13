// First, let's create a new context object
import { createContext } from 'react';

const MyContext = createContext();

// Next, we'll create a component that holds our global state
import { useState } from 'react';

function MyProvider(props) {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {props.children}
    </MyContext.Provider>
  );
}

// Now, we can use our global state in any component that needs it
import { useContext } from 'react';

function MyComponent() {
  const { count, setCount } = useContext(MyContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Finally, we'll render our component inside the provider
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}
