import './App.css';
import React, {useState} from 'react';
import TripCalculator from './components/TripCalculator'
import TripCalculatorWithMaps from './components/TripCalculatorWithMaps'





function App() {

  const [show, setShow] = useState(false)

  const buttonText = show ? 'Use Adress' : 'Input distance manually'

  const handleClick = () => {
    if (show===false) {
      setShow(true)
    }else if(show===true) {
      setShow(false)
    }
  }


  return (
    <div>
    <button onClick={handleClick} type="button"> {buttonText} </button>
    {show ? <TripCalculator/> : <TripCalculatorWithMaps/>}
    </div>
  );
}

export default App;
