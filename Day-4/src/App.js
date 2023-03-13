import './App.css';
import UseCallback from './HooksWithForm/UseCallback';
import UseContextForm from './HooksWithForm/UseContext';
import MyFormmm from './HooksWithForm/UseEffect';
import UseMemo from './HooksWithForm/UseMemo';
import UseReducer from './HooksWithForm/UseReducer';
import UseRef from './HooksWithForm/UseRef';
import MyFormm from './HooksWithForm/UseState';
import MyAppBar from './Material/AppBar';
import MyButton from './Material/Button';
import MyCard from './Material/Card';
import MyForm from './Material/Form';

function App() {
  return (
    <div className="App">
      <MyAppBar/>
      <br/>
        <MyButton/>
        <MyCard/>
        <MyForm/>
        <br/>
        <MyFormm/>
        <MyFormmm/>
        <UseContextForm/>
        <UseReducer/>
        <UseRef/>
        <UseMemo/>
        <UseCallback/>
    </div>
  );
}

export default App;
