function Greeting(props) {
    return (
      <p>
        Hello! I'm {props.name}, a {props.age} years old 
        {props.occupation}.
        Pleased to meet you!
      </p>
    );
  }
  export default Greeting;