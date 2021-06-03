import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import {Speed,Directions,} from '@material-ui/icons/'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import miniVan from '../cars/minivan-car.svg'
import sedanCar from '../cars/sedan-car-model.svg'
import cityCar from '../cars/car-city-model.svg'
import divStyles from '../styles/stylesDiv'
import useStyles from '../styles/useStyles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const Form = (props) => {

    const classes = useStyles()

    return (
<>
  <Grid container className={classes.grid} spacing={6}>
    <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Grid container justify="center" className={classes.buttonGroupA.buttonContainer}>
            <ToggleButtonGroup
              value={props.alignment}
              exclusive
              onChange={props.handleAlignment}
              aria-label="text-aligment"
              className={classes.buttonGroupA.buttonGroup}>
              <ToggleButton value="Car1" aria-label="left aligned" onClick={props.fuelchange1} className={classes.buttonGroupA.toggleButtons}>
                <label style={divStyles.buttonGroup.label1}> <img src={cityCar} style={divStyles.buttonGroup.labelImage} alt={cityCar}/><p style={divStyles.buttonGroup.labeltext}> Auto 1 </p></label>
              </ToggleButton>
              <ToggleButton  value="Car2"  aria-label="centered" onClick={props.fuelchange2} className={classes.buttonGroupA.toggleButtons}>
                <label style={divStyles.buttonGroup.label1} > <img src={sedanCar} style={divStyles.buttonGroup.labelImage} alt={sedanCar}/><p style={divStyles.buttonGroup.labeltext}> Auto 2 </p></label>
              </ToggleButton>
              <ToggleButton  value="Car3" aria-label="right aligned" onClick={props.fuelchange3} className={classes.buttonGroupA.toggleButtons}>
                <label style={divStyles.buttonGroup.label1}> <img src={miniVan} style={divStyles.buttonGroup.labelImage} alt={miniVan}/><p style={divStyles.buttonGroup.labeltext}> Auto 3 </p></label>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" className={classes.formControl}>
            <form className={classes.root} onSubmit={props.calculateTimeandFuel} variant='outlined'>
                  <Typography variant='h5'>
                    Kirjoita etäisyys
                  </Typography>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled"><Directions/></InputLabel>
                    <FilledInput id="component-filled" value={props.distance} onChange={props.handleDistance} type='number'/>
                  </FormControl>
                  <Typography variant='h5'>
                    Kirjoita nopeus
                  </Typography>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled"><Speed/></InputLabel>
                    <FilledInput id="component-filled" value={props.speed1} onChange={props.handleSpeed1} type='number'/>
                  </FormControl>
                  <Typography variant='h5'>
                    Kirjoita nopeus
                  </Typography>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled"><Speed/></InputLabel>
                    <FilledInput id="component-filled" value={props.speed2} onChange={props.handleSpeed2} type='number'/>
                  </FormControl>
                <div style= {divStyles.button.buttonStyle}>
              <Button variant="contained" color="primary" type={props.type} >
                SEND
              </Button>
                </div>
            </form>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
</>
    )

}

export default Form