import React, {useState} from 'react'
import Button from './Button'

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
  
  
    const handledistanceChange = (event) => {
      setDistance(event.target.value)
    }

    const fuelUseCalculator = (fuelUse,speed) => {
        const consumptionMultiplier = 1.009
        let fuel = fuelUse
        for(let i = 1; i <=speed; i++) {
          fuel*=consumptionMultiplier
        }

        return fuel

      }
  
    const calculateTimeandFuel = (event) => {
      event.preventDefault()

      const fuelUsed1 = fuelUseCalculator(fuelUse,speed1)
      const fuelUsed2 = fuelUseCalculator(fuelUse,speed2)
      
      const travelTime1 = (distance/speed1)*60
      const travelTime2 = (distance/speed2)*60
      
      let fuelConsumptionOne = fuelUsed1*(distance/100)
      
      let fuelConsumptionTwo = fuelUsed2*(distance/100)
      
      const travelinfoObject1 = {
        fuelused: fuelConsumptionOne,
        traveltime:travelTime1
      }

      const travelinfoObject2 = {
        fuelused2: fuelConsumptionTwo,
        traveltime2:travelTime2
      }
  
      setTravelInfo(travelinfoObject1)
      setTravelInfo2(travelinfoObject2)
  
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
              <input type="radio" checked={fuelUse===3.0} onClick={() => setFuelUse(3.0)} />
              <label>Car 2</label>
              <input type="radio" checked={fuelUse===3.5} onClick={() => setFuelUse(3.5)} />
              <label>Car 3</label>
              <input type="radio" checked={fuelUse===4.0} onClick={() => setFuelUse(4.0)} />
            </div>
            <div>
              Distance <input value={distance} onChange={handledistanceChange}/> Km
            </div>
            speed <input value={speed1} onChange={handleSpeedChange1}/>Km/h
            speed <input value={speed2} onChange={handleSpeedChange2}/>Km/h
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

export default TripCalculator