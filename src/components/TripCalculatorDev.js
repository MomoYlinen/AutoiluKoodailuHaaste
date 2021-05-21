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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import mediumCar from '../cars/mediumCar.svg'
import smallCar from '../cars/smallCar.svg'
import smallCar2 from '../cars/smallCar2.svg'
import { createMuiTheme } from '@material-ui/core/styles';

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
  
    const lessTime = `${fuelused ? (fuelused2-fuelused).toFixed(2): fuelused} litraa enemmän polttoainetta käytetty`
    const moreGas = `Arvioitu matkaaika on ${travelTimeConverter((traveltime-traveltime2))} lyhyempi`
    const speedDifference = `Vauhtiero on ${speed2-speed1}`

    const timeCoverted1 = travelTimeConverter(traveltime)
    const timeCoverted2 = travelTimeConverter(traveltime2)

    const paperStyle ={padding:'25px 15px 25px 15px',width:500, height:'100vhmin',margin:'20px auto', background:'#6b6a6a', border:'1px solid' }
    const buttonStyle = {padding:'0px 0px 10px 0px', justify:'center'}
    const buttonGroupStyle = {width:'80%', height:'90px',justify:'center', padding:'10px'}
    const buttonToggleStyle = {width:'36%', justify:'center',background:'white',border:'15 px solid', borderColor:'blue',borderRadius:'10px'}
    const labelStyle = {padding:'0px',fontSize:'0.6rem', justify:'center'}
    const imageSize = {height:'80px', justify:'center', padding:'10px'}
    const labels1 = {padding:'30px 25px 20px 25px',color:'white'}
    const labels2 = {padding:'20px 25px 20px 25px',color:'white'}
    const labels3 = {padding:'30px 5px 20px 5px',color:'white'}
    const labels4 = {padding:'20px 5px 20px 0px',color:'white'}

    const toggleButtonlabel = {width:'100%'}

    const inputSize = {width:'80%', height:'45px',background:'#ffffff'}
    const formMargin = {width:'100%', justify:'center'}
    const formPadding = {padding:'0px 15px 0px 0px',width:'80%', margin:'0px'}
    const buttonPadding = {padding:'10px 0px 0px 0px'}

    const createTable = (speed,traveltime,fuelused) => {
        return { speed,traveltime,fuelused};
      }
    const rows =[
        createTable(speed1,timeCoverted1,(`${fuelused ? fuelused.toFixed(2):fuelused} litres`)),
        createTable(speed2,timeCoverted2,(`${fuelused2 ? fuelused2.toFixed(2):fuelused2} litres`)),
        createTable(speedDifference,moreGas,lessTime)
    ]

  
      return (
        <div className={classes.grid}>
            <Grid container className={classes.grid} spacing={2} padding='50px'>
                <Paper style={paperStyle}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2} style={buttonStyle}>
                        <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="Cars"
                        style={buttonGroupStyle}
                        >
                        <ToggleButton style={buttonToggleStyle} value="Car1" aria-label="left aligned" onClick={() => setFuelUse(3.0)}>
                           <label style={labelStyle}> <img src={smallCar2} style={imageSize}/></label>
                        </ToggleButton>
                        <ToggleButton style={buttonToggleStyle} value="Car2"  aria-label="centered" onClick={() => setFuelUse(3.5)}>
                        <label style={labelStyle}> <img src={smallCar} style={imageSize}/> </label>
                        </ToggleButton>
                        <ToggleButton style={buttonToggleStyle} value="Car3" aria-label="right aligned" onClick={() => setFuelUse(4.0)}>
                        <label style={labelStyle}> <img src={mediumCar} style={imageSize} /> </label>
                        </ToggleButton>
                        </ToggleButtonGroup>

                    </Grid>
                    <Grid className={classes.buttonGroup}>
                  <Grid container spacing={0}>
                    <Grid item xs={4} style={labelStyle}>
                      <Typography variant="h5">
                        <div style={labels1}>
                          Etäisyys
                        </div>
                        <div style={labels2}>
                          Nopeus
                        </div>
                        <div style={labels2}>
                          Nopeus
                        </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={formMargin}>
            <form className={classes.root} onSubmit={calculateTimeandFuel} variant='outlined' style={formPadding}>
                <div style={inputSize}>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Directions/></InputLabel>
                    <OutlinedInput id='component-outlined' value={distance} onChange={handledistanceChange} placeholder='Distance' />
                </FormControl>
                </div>
                <div style={inputSize}>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed1} onChange={handleSpeedChange1} placeholder='Speed' />
                </FormControl>
                </div>
                <div style={inputSize}>
                <FormControl size="small">
                    <InputLabel htmlFor='component-outlined'><Speed/></InputLabel>
                    <OutlinedInput id='component-outlined' value={speed2} onChange={handleSpeedChange2}  placeholder='Speed' />
                </FormControl>
                </div>
                <div style={buttonPadding}>
                <Button variant="contained" color="primary" type="submit" size='large' >
                    SEND
                </Button>
                </div>
            </form>
            </Grid>
            <Grid item xs={4} style={labelStyle}>
                      <Typography variant="h6">
                        <div style={labels3}>
                        {`${fuelUsed100 ? distance:''} Km`}
                        </div>
                        <div style={labels4}>
                        {`${fuelUsed100 ? fuelUsed100.toFixed(1):''}l/100km`}
                        </div>
                        <div style={labels4}>
                        {`${fuelUsed200 ? fuelUsed200.toFixed(1):''}l/100km`}
                        </div>
                        </Typography>
                    </Grid>
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container padding='10px'>
            {fuelused ?
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <Typography variant="h8">
        <TableHead size='large'>
          <TableRow>
            <TableCell ><Speed/></TableCell>
            <TableCell align="center"><WatchLater/></TableCell>
            <TableCell align="center"><LocalGasStation/></TableCell>
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
        </Typography>
      </Table>
    </TableContainer> : ''
    }
            </Grid>
            </Grid>
            </Paper>
            </Grid>
        </div>
        
      )
}

export default TripCalculatorDev
