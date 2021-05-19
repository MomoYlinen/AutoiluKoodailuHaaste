import './App.css';
import React, {useState} from 'react';
import TripCalculator from './components/TripCalculator'
import TripCalculatorWithMaps from './components/TripCalculatorWithMaps'
import TripCalculatorDev from './components/TripCalculatorDev'
import {Typography, CssBaseline} from '@material-ui/core'





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
      <CssBaseline/>
      <TripCalculatorDev/>
    </div>
  );
}

export default App;
