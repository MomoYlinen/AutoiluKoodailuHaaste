import axios from 'axios';
import React, {useState} from 'react'
import Button from './Button'


const TripCalculatorWithMaps = () => {

  
  const [fuelUse, setFuelUse] = useState(3.0)
  const [speed1, setSpeed1] = useState(0)
  const [speed2, setSpeed2] = useState(0)
  const [adressOrigin, setAdressOrigin] = useState('')
  const [adressDestination, setDestination] = useState('')
  const [distance1, setDistance] = useState([])
  const [travelinfo,setTravelInfo] = useState({})
  const [travelinfo2,setTravelInfo2] = useState({})


  const getAdress = (adressOrigin,adressDestination) => {

    axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${adressOrigin}&destinations=${adressDestination}&key=`)
      .then(function (response) {
          setDistance(response.data.rows[0].elements[0].distance.value)
    })

    const finalDistance = distance1/1000
    setDistance(finalDistance)

    return finalDistance

  }

  const handleSpeedChange1 = (event) => {
    setSpeed1(event.target.value)
  }

  const handleSpeedChange2 = (event) => {
    setSpeed2(event.target.value)
  }


  const handleadressOrigin = (event) => {
    setAdressOrigin(event.target.value)
  }

  const handleAdressDestination = (event) => {
    setDestination(event.target.value)
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
    
    const distanceData = getAdress(adressOrigin,adressDestination)
    
    const fuelUsed1 = fuelUseCalculator(fuelUse,speed1)
    const fuelUsed2 = fuelUseCalculator(fuelUse,speed2)
    
    const travelTime1 = (distanceData/speed1)*60
    const travelTime2 = (distanceData/speed2)*60
    
    let fuelConsumptionOne = fuelUsed1*(distanceData/100)
    
    let fuelConsumptionTwo = fuelUsed2*(distanceData/100)
    
    const travelinfoObject1 = {
      fuelused: fuelConsumptionOne,
      traveltime:travelTime1,
      estimatedDistance:distanceData
    }

    const travelinfoObject2 = {
      fuelused2: fuelConsumptionTwo,
      traveltime2:travelTime2
    }

    setTravelInfo(travelinfoObject1)
    setTravelInfo2(travelinfoObject2)

  }

  const travelTimeConverter = (traveltime) => {

    if(!traveltime) return 0
    
    if (traveltime<60) return traveltime
      
    let counter = 0
    while (traveltime >= 60) {
        counter +=1
        traveltime -= 60
      }
    const time = `${counter}:${traveltime}`

    return time
  }


  const {fuelused,traveltime, estimatedDistance} = travelinfo
  const {fuelused2,traveltime2}=travelinfo2

  const lessTime = fuelused2-fuelused
  const moreGas = traveltime-traveltime2

  const timeCoverted1 = travelTimeConverter(traveltime)
  const timeCoverted2 = travelTimeConverter(traveltime2)

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
            Address <input value={adressOrigin} onChange={handleadressOrigin}/> Km
            Address <input value={adressDestination} onChange={handleAdressDestination}/> Km
          </div>
          speed <input value={speed1} onChange={handleSpeedChange1}/>Km/h
          speed <input value={speed2} onChange={handleSpeedChange2}/>Km/h
          <Button type={'submit'} text={'SEND'}/>
      </form>
      <div>
        Estimated distance {estimatedDistance} Km
      </div>
      <div>
        Estimated fuel consumption for the trip is {fuelused}l/100km
      </div>
      <div>
        Estimated traveltime with {speed1} km/h is {timeCoverted1}
      </div>
      <div>
      Estimated fuel consumption for the trip is {fuelused2}l/100km
      </div>
      <div>
      Estimated traveltime with {speed2} km/h is {timeCoverted2}
      </div>
      <div>
        With the speed of {speed2}, estimated traveltime will be {moreGas} minutes less traveltime
      </div>
      <div>
        Increased speed will use {lessTime} litres more gasoline
      </div>
      </div>
      
    )
}

export default TripCalculatorWithMaps