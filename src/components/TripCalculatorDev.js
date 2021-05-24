import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import {DriveEta,Speed,Directions,LocalGasStation, WatchLater} from '@material-ui/icons/'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import miniVan from '../cars/minivan-car.svg'
import sedanCar from '../cars/sedan-car-model.svg'
import cityCar from '../cars/car-city-model.svg'
import { createMuiTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3)
    },
  },
  grid: {
    flexGrow: 1,
    flexDirection: 'row',
    background:'#d32f2f',
    padding:'10px 20px 10px 20px'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  table: {
    Width: 150,
  },
}));

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#d32f2f',
      },
      secondary: {
        main: '#7d7979',
      },
  },
});


const TripCalculatorDev = () => {

    const classes = useStyles()

    const theme = createMuiTheme()
    
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const [state, setState] = useState({
      checkedA: true,
      checkedB: true,
    });

  
    const [fuelUse, setFuelUse] = useState(3.0)
    const [speed1, setSpeed1] = useState()
    const [speed2, setSpeed2] = useState()
    const [distance, setDistance] = useState()
    const [travelinfo,setTravelInfo] = useState({})
    const [travelinfo2,setTravelInfo2] = useState({})
  

    const [show, setShow] = useState(true)

    const buttonText = show ? 'Use Adress' : 'Input distance manually'
  
    const handleClick = () => {
      if (show===false) {
        setShow(true)
      }else if(show===true) {
        setShow(false)
      }
    }
    const handleSpeedChange1 = (event) => {
      setSpeed1(event.target.value)
    }
  
    const handleSpeedChange2 = (event) => {
      setSpeed2(event.target.value)
    }
  
  
    const handledistanceChange = (event) => {
      setDistance(event.target.value)
    }

    const handleSwitchChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

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
    console.log(distance)
  
    const {fuelused,traveltime,fuelUsed100} = travelinfo
    const {fuelused2,traveltime2,fuelUsed200}=travelinfo2
  
    const lessTime = `${fuelused ? (fuelused2-fuelused).toFixed(2): fuelused}`
    const moreGas = `${travelTimeConverter((traveltime-traveltime2))} `
    const speedDifference = `${speed2-speed1}`

    const timeCoverted1 = travelTimeConverter(traveltime)
    const timeCoverted2 = travelTimeConverter(traveltime2)


    const createTable = (speed,traveltime,fuelused) => {
        return { speed,traveltime,fuelused};
      }
    const convertedFuelUse = `${fuelused ? fuelused.toFixed(2):fuelused} litraa`
    const convertedFuelUse2= `${fuelused2 ? fuelused2.toFixed(2):fuelused2} litraa`

    const paperStyle ={padding:'25px 15px 25px 15px',width:500, height:'100vhmin',margin:'20px auto', border:'1px solid' }
    const results = {    display: 'flex',flexDirection: 'column', padding: '10px'}
    const resultsHeader = {padding: '0px 0px 30px 0px' }
    const showResults = {padding: '0px 0px 15px 0px' }
    const answerStyle = {padding: '10px 5px 10px 5px' }
    const answerBox = {padding:'10px', items:"center"}

    const buttonContainer = {height:'70px', padding:'10px 0px 100px 0px'}
    const buttonGroup = {width:'100%', padding:'10px'}
    const toggleButtons = {width:'33%', padding:'10px', height:'70px'}
    const label = {width:'80%', height:'60px'}
    const label1 = {width:'90%', height:'60px'}
    const labelImage = {width:'55px'}

    const switchLabel = {padding:'10px'}

    const addressStyle = {display:'flex', flexDirection:'row'}
    const addressField = {padding:'0px 15px 0px 0px'  }
    const addressLabel = {padding:'0 0 10px 120px'}

    const formStyle = {justify:'center'}
    const formCentering = {padding: '0px 0px 11px 120px'}
    const formCenteringzero = {padding: '0px 0px 0px 0px'}
    const formlabel = {padding: '0px 0px 20px 0px'}

    const buttonStyle = {padding: '0px 0px 0px 170px'}
    const buttonStyle2 = {padding: '10px 0px 0px 60px'}
    
 
      return (
        <div>
            <Grid container className={classes.grid} spacing={3} padding='50px'>
                <Paper style={paperStyle}>
                {show ? 
                <Grid item xs={12}>
                    <Grid container justify="center" style={buttonContainer}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text-aligment"
                        style={buttonGroup}
                        >
                        <ToggleButton value="Car1" aria-label="left aligned" onClick={() => setFuelUse(3.0)} style={toggleButtons}>
                           <label style={label1}> <img src={cityCar} style={labelImage}/>Auto 1</label>
                        </ToggleButton>
                        <ToggleButton  value="Car2"  aria-label="centered" onClick={() => setFuelUse(3.5)} style={toggleButtons}>
                        <label style={label} > <img src={sedanCar} style={labelImage}/> Auto 2 </label>
                        </ToggleButton>
                        <ToggleButton  value="Car3" aria-label="right aligned" onClick={() => setFuelUse(4.0)} style={toggleButtons}>
                        <label style={label} > <img src={miniVan} style={labelImage}/> Auto 3 </label>
                        </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid className={classes.buttonGroup}>
                      <Grid item xs={12}>
                      <Grid container style={switchLabel} justify="center">
                        <div>
                          Kirjoita etäisyys
                        </div>
                      <Switch
                            checked={state.checkedB}
                            onChange={handleSwitchChange}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                        <div>
                          Kirjoita osoite
                        </div>
                      </Grid>
                    </Grid>
                  <Grid item xs={12} style={formStyle}>
                  <Grid container justify="center">
            <form className={classes.root} onSubmit={calculateTimeandFuel} variant='outlined'>
              {state.checkedB ?
                <div>
                <div style={addressLabel}>
                    <Typography variant='h5'>
                    Kirjoita Osoite
                    </Typography>
                  </div>
                <div style={addressStyle}>
                <FormControl size="small" style={addressField}>
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={distance} onChange={handledistanceChange} placeholder='Distance' />
                </FormControl>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={distance} onChange={handledistanceChange} placeholder='Distance' />
                </FormControl>
                </div>
                </div>:
                <div>
                  <div style={formlabel}>
                    <Typography variant='h5'>
                    Kirjoita etäisyys
                    </Typography>
                  </div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={distance} onChange={handledistanceChange} placeholder='Distance' />
                </FormControl>
                </div>
                }
                <div style= {state.checkedB ? formCentering : formCenteringzero} >
                <div style={formlabel}>
                    <Typography variant='h5'>
                    Kirjoita nopeus
                    </Typography>
                  </div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed1} onChange={handleSpeedChange1} placeholder='Speed' />
                </FormControl>
                </div>
                <div style= {state.checkedB ? formCentering : formCenteringzero}>
                <div style={formlabel}>
                    <Typography variant='h5'>
                    Kirjoita nopeus
                    </Typography>
                  </div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed2} onChange={handleSpeedChange2}  placeholder='Speed' />
                </FormControl>
                </div>
                <div style= {state.checkedB ? buttonStyle : buttonStyle2}>
                <Button variant="contained" color="primary" type="submit" >
                    SEND
                </Button>
                </div>
            </form>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
            :  
            <Grid item xs={12}>
              <Grid container padding='10px'>
              <Grid item xs={12}>
              <Grid container padding='10px' justify="center">
                <Typography variant='h5'>
                  <div style={results}>
                  Etäisyys
                  </div>
                  <div style={resultsHeader}>
                    {distance} Km
                  </div>
                </Typography>
                </Grid>
              </Grid>
            <Grid item xs={12}>
              <Grid container padding='10px'>
            <Grid item xs={3}>
              <Grid container padding='10px' style={results}>
                <Typography variant='h5'>
                  <div style={resultsHeader}>
                    Nopeus
                  </div>
                </Typography>
                <Typography variant='h6'>
                <div style={showResults}>
               {speed1} Km
                </div>
                <div style={showResults}>
                  {speed2} Km
                </div>
                </Typography>
                </Grid>
                </Grid>
              <Grid item xs={6}>
              <Grid container padding='10px' style={results} justify='center'>
              <Typography variant='h5' style={resultsHeader}>
                  <div>
                    Matka-aika
                  </div>
                </Typography>
                <Typography variant='h6'>
                <div style={showResults}>
                {timeCoverted1}
                </div>
                <div style={showResults}>
                {timeCoverted2}
                </div>
                </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
              <Grid container padding='10px' style={results}>
              <Typography variant='h5' style={resultsHeader}>
                  <div>
                    Kulutus
                  </div>
                </Typography>
                <Typography variant='h6'>
                <div style={showResults}>
                {convertedFuelUse}
                </div>
                <div style={showResults}>
                {convertedFuelUse2}
                </div>
                </Typography>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container style={answerBox}>
                <Typography variant='h5'>
                  <div style={answerStyle}>
                  Kulkemalla  {speedDifference} kilometriä nopeampaa saavutettaan {moreGas} 
                  lyhyempi matka-aika, mutta polttoainekulutus kasvaa {lessTime} litraa.
                  </div>
                  <div>
                  <Button variant="contained" color="primary" type='button' onClick={() => setShow(true)}>
                    RETURN
                </Button>
                </div>
                </Typography>
              </Grid>
            </Grid>
            </Grid>
            </Grid>
}
            </Paper>
            </Grid>
        </div>
        
      )
}

export default TripCalculatorDev
