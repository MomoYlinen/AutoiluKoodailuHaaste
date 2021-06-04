import React, {useState} from 'react'
import fuelUseCalculator from '../utils/fuelUseCalculator'
import formValidator from '../utils/formValidator'
import FormSubmit from './Form.js'
import Results from './Results';
import '../styles/TripCalculator.css';

const TripCalculator = () => {
  
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  const [fuelUse, setFuelUse] = useState(0)
  const [travelinfo,setTravelInfo] = useState({})
  const [show, setShow] = useState(true)

  const [speed1, setSpeed1] = useState('')
  const [speed2, setSpeed2] = useState('')
  const [distance, setDistance] = useState('')

  const handleSpeed1 = (event) => setSpeed1(event.target.value.trim())
  const handleSpeed2 = (event) => setSpeed2(event.target.value.trim())
  const handleDistance = (event) => setDistance(event.target.value.trim())
  
  const returnToForm = () => setShow(true)
  
  const handleFuelChange1 = () => setFuelUse(3.0)
  const handleFuelChange2 = () => setFuelUse(3.5)
  const handleFuelChange3 = () => setFuelUse(4.0)

    
  const calculateTimeandFuel = (event) => {
    
    const validateForm = formValidator(speed1, speed2, distance,fuelUse)
  
    if(validateForm === false){
      return
    }else{

      setShow(false)

      const fuelUsed1 = fuelUseCalculator(fuelUse,speed1)
      const fuelUsed2 = fuelUseCalculator(fuelUse,speed2)
      
      const travelTime1 = (distance/speed1)*60
      const travelTime2 = (distance/speed2)*60
      
      let fuelConsumptionOne = fuelUsed1*(distance/100)
      
      let fuelConsumptionTwo = fuelUsed2*(distance/100)
      
      const travelinfoObject1 = {
        fuelused: fuelConsumptionOne,
        traveltime:travelTime1,
        fuelUsed100:fuelUsed1,
        fuelused2: fuelConsumptionTwo,
        traveltime2:travelTime2,
        fuelUsed200:fuelUsed2
      }
      setTravelInfo(travelinfoObject1)
  }}

    const travelTimeConverter = (traveltime) => {

      if(!traveltime) return
      
      if (traveltime<60) return `${traveltime.toFixed(0)} minuuttia`
          
        let counter = 0
        while (traveltime >= 60) {
            counter +=1
            traveltime -= 60
          }
        const time = `${counter} tuntia ${traveltime.toFixed(0)} minuuttia`
    
        return time
      }
  
    const {fuelused,traveltime,fuelUsed100,fuelused2,traveltime2,fuelUsed200} = travelinfo
  
    const lessTime = `${fuelused ? (fuelused2-fuelused).toFixed(2): fuelused}`
    const moreGas = `${travelTimeConverter((traveltime-traveltime2))} `
    const speedDifference = `${speed2-speed1}`

    const timeCoverted1 = travelTimeConverter(traveltime)
    const timeCoverted2 = travelTimeConverter(traveltime2)

    const convertedFuelUse = `${fuelused ? fuelused.toFixed(2):fuelused} litraa`
    const convertedFuelUse2= `${fuelused2 ? fuelused2.toFixed(2):fuelused2} litraa`

    const fuelUse100 = `${fuelUsed100 ? fuelUsed100.toFixed(2):fuelUsed100} L/100km`
    const fuelUse200= `${fuelUsed200 ? fuelUsed200.toFixed(2):fuelUsed200} L/100km`
    
    return (
      <div>
      <div className={`card ${show ? '' : 'show'} `}>
      {show ? 
        <div className='front'>
        <FormSubmit distance={distance} handleDistance={handleDistance} speed1={speed1} handleSpeed1={handleSpeed1} speed2={speed2} handleSpeed2={handleSpeed2} type={'submit'}
              calculateTimeandFuel={calculateTimeandFuel} fuelchange1={handleFuelChange1} fuelchange2={handleFuelChange2} fuelchange3={handleFuelChange3} alignment={alignment} handleAlignment={handleAlignment}/>
        </div>:
        <div className="back">
        <Results distance={distance} speed1={speed1} speed2={speed2} timeCoverted1={timeCoverted1} timeCoverted2={timeCoverted2} fuelused100={fuelUse100} fuelused200={fuelUse200}
              convertedFuelUse={convertedFuelUse} convertedFuelUse2={convertedFuelUse2} speedDifference={speedDifference} moreGas={moreGas} lessTime={lessTime} handlereturn={returnToForm}/>
        </div>}
        </div>
      </div>
    )
}

export default TripCalculator
