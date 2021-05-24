import './App.css';
import React, {useState} from 'react';
import TripCalculator from './components/TripCalculator'
import TripCalculatorWithMaps from './components/TripCalculatorWithMaps'
import TripCalculatorDev from './components/TripCalculatorDev'
import {Typography, CssBaseline} from '@material-ui/core'





function App() {


  return (
    <div>
      <TripCalculatorDev/>
    </div>
  );
}

export default App;
