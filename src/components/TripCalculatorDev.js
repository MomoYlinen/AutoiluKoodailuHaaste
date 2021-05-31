import React, {useState,useEffect} from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Speed,Directions,} from '@material-ui/icons/'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import miniVan from '../cars/minivan-car.svg'
import sedanCar from '../cars/sedan-car-model.svg'
import cityCar from '../cars/car-city-model.svg'
import Switch from '@material-ui/core/Switch';
import useStyles from '../styles/useStyles'
import fuelUseCalculator from '../utils/fuelUseCalculator'
import axios from 'axios'

var distanceMatrix = require('distance-matrix-api')

distanceMatrix.key('AlphaDMAx1F43ddFNPp16dRHOiL4yDajp9ymJdKA')


const TripCalculatorDev = () => {


    const classes = useStyles()

    const margin = {padding:'30px 0px 0px 10px'}
    const marginButton = {padding:'40px 0px 10px 150px'}
    
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const [state, setState] = useState({
      checkedA: true,
      checkedB: true,
    });

    const [fuelUse, setFuelUse] = useState(3.0)
    const [travelinfo,setTravelInfo] = useState({})
    const [travelinfo2,setTravelInfo2] = useState({})
    const [show, setShow] = useState(true)

    const [speed1, setSpeed1] = useState('')
    const [speed2, setSpeed2] = useState('')
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const [distance, setDistance] = useState('')

    const handleSpeed1 = (event) =>{
      setSpeed1(event.target.value)
    }
    const handleSpeed2 = (event) =>{
      setSpeed2(event.target.value)
    }
    const handleOrigin = (event) =>{
      setOrigin(event.target.value)
    }
    const handleDestination = (event) =>{
      setDestination(event.target.value)
    }
    const handleDistance = (event) =>{
      setDistance(event.target.value)
    }

  
    const handleSwitchChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    const returnToForm = () =>{
      setShow(true)
    }

    const getAdress = (adressOrigin,adressDestination, event) => {
      var origins = [adressOrigin];
      var destinations = [adressDestination];

    
      distanceMatrix.matrix(origins, destinations, function (err, distances) {
          if (!err)
          console.log(distances)
          setDistance(distances.rows[0].elements[0].distance.value/1000)
        })
        return
    }


  
    const calculateTimeandFuel = (event) => {
      setShow(false)

      console.log('ollaan täällä')
      if(state.checkedB){
        getAdress(origin,destination)
      }

      const fuelUsed1 = fuelUseCalculator(fuelUse,speed1)
      const fuelUsed2 = fuelUseCalculator(fuelUse,speed2)
      
      const travelTime1 = (distance/speed1)*60
      const travelTime2 = (distance/speed2)*60
      
      let fuelConsumptionOne = fuelUsed1*(distance/100)
      
      let fuelConsumptionTwo = fuelUsed2*(distance/100)
      
      const travelinfoObject1 = {
        fuelused: fuelConsumptionOne,
        traveltime:travelTime1,
        fuelUsed100:fuelUsed1
      }

      const travelinfoObject2 = {
        fuelused2: fuelConsumptionTwo,
        traveltime2:travelTime2,
        fuelUsed200:fuelUsed2
      }
  
      setTravelInfo(travelinfoObject1)
      setTravelInfo2(travelinfoObject2)
  
    }

    const travelTimeConverter = (traveltime) => {

        if(!traveltime) return `${0} minuuttia`
        
        if (traveltime<60) return `${traveltime.toFixed(0)} minuuttia`
          
        let counter = 0
        while (traveltime >= 60) {
            counter +=1
            traveltime -= 60
          }
        const time = `${counter} tuntia ${traveltime.toFixed(0)} minuuttia`
    
        return time
      }
  
    const {fuelused,traveltime} = travelinfo
    const {fuelused2,traveltime2}=travelinfo2
  
    const lessTime = `${fuelused ? (fuelused2-fuelused).toFixed(2): fuelused}`
    const moreGas = `${travelTimeConverter((traveltime-traveltime2))} `
    const speedDifference = `${speed2-speed1}`

    const timeCoverted1 = travelTimeConverter(traveltime)
    const timeCoverted2 = travelTimeConverter(traveltime2)

    const convertedFuelUse = `${fuelused ? fuelused.toFixed(2):fuelused} litraa`
    const convertedFuelUse2= `${fuelused2 ? fuelused2.toFixed(2):fuelused2} litraa`
    
      return (
        <div>
            <Grid container className={classes.grid} spacing={3} padding='50px'>
                <Paper className={classes.paper}>
                {show ? 
                <div>
                <Grid item xs={12}>
                    <Grid container justify="center" className={classes.buttonGroupA.buttonContainer}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text-aligment"
                        className={classes.buttonGroupA.buttonGroup}
                        >
                        <ToggleButton value="Car1" aria-label="left aligned" onClick={() => setFuelUse(3.0)} className={classes.buttonGroupA.toggleButtons}>
                           <label className={classes.buttonGroupA.label1}> <img src={cityCar} className={classes.buttonGroupA.labelImage} alt={cityCar}/>Auto 1</label>
                        </ToggleButton>
                        <ToggleButton  value="Car2"  aria-label="centered" onClick={() => setFuelUse(3.5)} className={classes.buttonGroupA.toggleButtons}>
                        <label className={classes.buttonGroupA.label1} > <img src={sedanCar} className={classes.buttonGroupA.labelImage} alt={sedanCar}/> Auto 2 </label>
                        </ToggleButton>
                        <ToggleButton  value="Car3" aria-label="right aligned" onClick={() => setFuelUse(4.0)} className={classes.buttonGroupA.toggleButtons}>
                        <label className={classes.buttonGroupA.label1} > <img src={miniVan} className={classes.buttonGroupA.labelImage} alt={miniVan}/> Auto 3 </label>
                        </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid className={classes.buttonGroup}>
                      <Grid item xs={12}>
                      <Grid container className={classes.switch.switchLabel} justify="center">
                        <div>
                        <Typography variant='h6'>
                          Kirjoita etäisyys
                        </Typography>
                        </div>
                      <Switch
                            checked={state.checkedB}
                            onChange={handleSwitchChange}
                            color="secondary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                        <div>
                        <Typography variant='h6'>
                          Kirjoita osoite
                        </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  <Grid item xs={12} className={classes.form.formStyle}>
                  <Grid container justify="center">
            <form className={classes.root} onSubmit={calculateTimeandFuel} variant='outlined'>
              {state.checkedB ?
                <div>
                <div className={classes.address.addressLabel}>
                    <Typography variant='h5'>
                    Kirjoita Osoite
                    </Typography>
                  </div>
                <div className={classes.address.addressStyle}>
                <FormControl size="small" className={classes.address.addressField}>
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={origin} name='origin' onChange={handleOrigin} placeholder='Distance' />
                </FormControl>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={destination} name='destination' onChange={handleDestination} placeholder='Distance' />
                </FormControl>
                </div>
                </div>:
                <div>
                  <div className={classes.form.formlabel}>
                    <Typography variant='h5'>
                    Kirjoita etäisyys
                    </Typography>
                  </div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={distance} name='distance' onChange={handleDistance} placeholder='Distance' />
                </FormControl>
                </div>
                }
                <div className= {state.checkedB ? classes.form.formCentering : classes.form.formCenteringzero} >
                <div className={classes.form.formlabel}>
                    <Typography variant='h5'>
                    Kirjoita nopeus
                    </Typography>
                  </div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed1} name='speed1' onChange={handleSpeed1} placeholder='Speed' />
                </FormControl>
                </div>
                <div className= {state.checkedB ? classes.form.formCentering : classes.form.formCenteringzero}>
                <div className={classes.form.formlabel}>
                    <Typography variant='h5'>
                    Kirjoita nopeus
                    </Typography>
                  </div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed2} name='speed2' onChange={handleSpeed2}  placeholder='Speed' />
                </FormControl>
                </div>
                <div className= {state.checkedB ? classes.buttonStyle.buttonStyle : classes.buttonStyle.buttonStyle2}>
                <Button variant="contained" color="primary" type="submit" >
                    SEND
                </Button>
                </div>
            </form>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
            </div>
            :
            <div>
            <Grid item xs={12}>
              <Grid container padding='10px'>
              <Grid item xs={12}>
              <Grid container padding='10px' justify="center">
                <Typography variant='h3'>
                  <div className={classes.results.results}>
                  Tulokset
                  </div>
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.gridSeparations}>
              <Grid container padding='10px' justify="center" className={classes.gridSeparations}>
                <Typography variant='h5'>
                  <div className={classes.results.results}>
                  Etäisyys
                  </div>
                  <div className={classes.results.resultsHeader}>
                    {distance} Km
                  </div>
                </Typography>
                </Grid>
              </Grid>
            <Grid item xs={12}>
              <Grid container>
            <Grid item xs={3}>
              <Grid container padding='10px' className={classes.results.results} style={margin}>
                <Typography variant='h5'>
                  <div className={classes.results.resultsHeader}>
                    Nopeus
                  </div>
                </Typography>
                <Typography variant='h6'>
                <div className={classes.results.showResults}>
               {speed1} Km
                </div>
                <div className={classes.results.showResults}>
                  {speed2} Km
                </div>
                </Typography>
                </Grid>
                </Grid>
              <Grid item xs={6}>
              <Grid container padding='10px' className={classes.results.results} justify='center' style={margin}>
              <Typography variant='h5' className={classes.results.resultsHeader}>
                  <div>
                    Matka-aika
                  </div>
                </Typography>
                <Typography variant='h6'>
                <div className={classes.results.showResults}>
                {timeCoverted1}
                </div>
                <div className={classes.results.showResults}>
                {timeCoverted2}
                </div>
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
              <Grid container padding='10px' className={classes.results} style={margin}>
              <Typography variant='h5' className={classes.results.resultsHeader}>
                  <div>
                    Kulutus
                  </div>
                </Typography>
                <Typography variant='h6'>
                <div className={classes.results.showResults}>
                {convertedFuelUse}
                </div>
                <div className={classes.results.showResults}>
                {convertedFuelUse2}
                </div>
                </Typography>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className ={classes.results.answerBox} style={margin}>
                <Typography variant='h5'>
                  <div className={classes.results.answerStyle}>
                  Kulkemalla  {speedDifference} kilometriä nopeampaa saavutettaan {moreGas} 
                  lyhyempi matka-aika, mutta polttoainekulutus kasvaa {lessTime} litraa.
                  </div>
                  <div style={marginButton}>
                  <Button variant="contained" color="primary" type='button' onClick={() => returnToForm()}>
                    RETURN
                </Button>
                </div>
                </Typography>
              </Grid>
            </Grid>
            </Grid>
            </Grid>
            </div>
}
            </Paper>
            </Grid>
        </div>
        
      )
}

export default TripCalculatorDev
