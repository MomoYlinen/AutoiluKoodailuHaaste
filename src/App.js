import './App.css';
import React, {useState} from 'react';

const Button = ({type,text}) => {

  return (
    <button type={type}>{text}</button>
  )
}

const TripCalculator = () => {

  
  const [fuelUse, setFuelUse] = useState(3.0)
  const [speed1, setSpeed1] = useState(0)
  const [speed2, setSpeed2] = useState(0)
  const [distance, setDistance] = useState(80)
  const [travelinfo,setTravelInfo] = useState({})
  const [travelinfo2,setTravelInfo2] = useState({})

  const handleSpeedChange1 = (event) => {
    setSpeed1(event.target.value)
  }

  const handleSpeedChange2 = (event) => {
    setSpeed2(event.target.value)
  }

  const handlefuelUseChange = (event) => {
    setFuelUse(event.target.value)
  }

  const handledistanceChange = (event, distance) => {
    setDistance(distance)
  }

  const calculateTimeandFuel = (event) => {
    event.preventDefault()

    console.log('fuel',fuelUse)
    console.log('distance',distance)
    console.log('speed',speed1)
    
    const consumptionMultiplier = 1.009
    let fuel = fuelUse
    for(let i = 1; i <=speed1; i++) {
      fuel*=consumptionMultiplier
    }
    console.log(fuel)
    const travelTime = (distance/speed1)*60
    let fuelConsumption = fuel*(distance/100)
    const travelinfoObject = {
      fuelused: fuelConsumption,
      traveltime:travelTime
    }

    console.log(travelinfoObject)
    setTravelInfo(travelinfoObject)

  }

  const calculateTimeandFuel2 = (event) => {
    event.preventDefault()
    
    const consumptionMultiplier = 1.009
    let fuel = fuelUse
    for(let i = 1; i <=speed2; i++) {
      fuel*=consumptionMultiplier
    }
    console.log(fuel)
    const travelTime = (distance/speed2)*60
    let fuelConsumption = fuel*(distance/100)
    const travelinfoObject = {
      fuelused2: fuelConsumption,
      traveltime2:travelTime
    }
    setTravelInfo2(travelinfoObject)

  }

  console.log(distance)

  const {fuelused,traveltime} = travelinfo
  const {fuelused2,traveltime2}=travelinfo2

  const lessTime = fuelused2-fuelused
  const moreGas = traveltime-traveltime2

    return (
      <div>
      <form onSubmit={calculateTimeandFuel}>
            <div>
            <label>Car 1</label>
            <input type="radio" checked={fuelUse==3.0} onClick={() => setFuelUse(3.0)} />
            <label>Car 2</label>
            <input type="radio" checked={fuelUse==3.5} onClick={() => setFuelUse(3.5)} />
            <label>Car 3</label>
            <input type="radio" checked={fuelUse==4.0} onClick={() => setFuelUse(4.0)} />
          </div>
          <div>
            Distance <input value={distance} onChange={handledistanceChange}/>
          </div>
          speed <input value={speed1} onChange={handleSpeedChange1}/>
          <Button type={'submit'} text={'SEND'}/>
      </form>
      <form onSubmit={calculateTimeandFuel2}>
          speed <input value={speed2} onChange={handleSpeedChange2}/>
          <Button type={'submit'} text={'SEND'}/>
      </form>
      <div>
        Fuel consumption:{fuelused}/100km
      </div>
      <div>
        Time used: {traveltime} minutes
      </div>
      <div>
        Fuel consumption:{fuelused2}/100km
      </div>
      <div>
        Time used: {traveltime2} minutes
      </div>
      <div>
        {moreGas} minutes less traveltime
      </div>
      <div>
        {lessTime} litres more gasoline used
      </div>
      </div>
      
    )


}

function App() {
  return (
    <div>
      <TripCalculator/>
    </div>
  );
}

export default App;
