import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import {DriveEta,Speed,Directions} from '@material-ui/icons/'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2)
    },
  },
  grid: {
    flexGrow: 1,
    flexDirection: 'row'
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
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  table: {
    Width: 150,
  },
}));


const TripCalculatorDev = () => {

    const classes = useStyles()
    
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  
    const [fuelUse, setFuelUse] = useState(3.0)
    const [speed1, setSpeed1] = useState()
    const [speed2, setSpeed2] = useState()
    const [distance, setDistance] = useState()
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

    const travelTimeConverter = (traveltime) => {

        if(!traveltime) return `${0} minutes`
        
        if (traveltime<60) return `${traveltime} minutes`
          
        let counter = 0
        while (traveltime >= 60) {
            counter +=1
            traveltime -= 60
          }
        const time = `${counter} hours ${traveltime} minutes`
    
        return time
      }
    console.log(distance)
  
    const {fuelused,traveltime} = travelinfo
    const {fuelused2,traveltime2}=travelinfo2
  
    const lessTime = `${fuelused2-fuelused} litres more gasoline used`
    const moreGas = `Estimated traveltime is ${traveltime-traveltime2} minutes less`
    const speedDifference = `Speed difference is ${speed2-speed1}`

    const timeCoverted1 = travelTimeConverter(traveltime)
    const timeCoverted2 = travelTimeConverter(traveltime2)

    const paperStyle ={padding:'25px 15px 25px 15px',width:500, height:'100vhmin',margin:'20px auto'}

    const createTable = (speed,traveltime,fuelused) => {
        return { speed,traveltime,fuelused};
      }
    const rows =[
        createTable(speed1,timeCoverted1,fuelused),
        createTable(speed2,timeCoverted2,fuelused2),
        createTable(speedDifference,moreGas,lessTime)
    ]

  
      return (
        <div>
            <Grid container className={classes.grid} spacing={2} padding='30px'>
                <Paper style={paperStyle}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="Cars"
                        >
                        <ToggleButton value="Car1" size="large" aria-label="left aligned" onClick={() => setFuelUse(3.0)}>
                            <p><DriveEta /></p>
                            <p>Car1</p>
                        </ToggleButton>
                        <ToggleButton value="Car2" size="large" aria-label="centered" onClick={() => setFuelUse(3.5)}>
                        <p><DriveEta /></p>
                            <p>Car2</p>
                        </ToggleButton>
                        <ToggleButton value="Car3" size="large" aria-label="right aligned" onClick={() => setFuelUse(4.0)}>
                        <p><DriveEta /></p>
                            <p>Car3</p>
                        </ToggleButton>
                        </ToggleButtonGroup>

                    </Grid>
                    <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
            <form className={classes.root} onSubmit={calculateTimeandFuel} variant='outlined'>
                <div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={distance} onChange={handledistanceChange} placeholder='Distance' />
                </FormControl>
                </div>
                <div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed1} onChange={handleSpeedChange1} placeholder='Speed' />
                </FormControl>
                </div>
                <div>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed2} onChange={handleSpeedChange2}  placeholder='Speed' />
                </FormControl>
                </div>
                <Button variant="contained" color="primary" type="submit">
                    SEND
                </Button>
            </form>
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Speed</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Fuel use</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              {row.speed} Km
              </TableCell>
              <TableCell align="right">{row.traveltime}</TableCell>
              <TableCell align="right">{row.fuelused}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Grid>
            </Paper>
            </Grid>
        </div>
        
      )
}

export default TripCalculatorDev
