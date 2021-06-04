import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import {Speed,Directions,} from '@material-ui/icons/'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import miniVan from '../styles/cars/minivan-car.svg'
import sedanCar from '../styles/cars/sedan-car-model.svg'
import cityCar from '../styles/cars/car-city-model.svg'
import formStyles from '../styles/formStyles'
import useStyles from '../styles/useStyles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Form = (props) => {

    const classes = useStyles()

    return (
<div>
  <Grid container className={classes.grid} spacing={6}>
    <Paper className={classes.paper} elevation={3} variant="outlined">
      <div className='backround'>
        <Grid item xs={12}>
          <Grid container justify="center" className={classes.buttonGroupA.buttonContainer}>
            <ToggleButtonGroup
              value={props.alignment}
              exclusive
              onChange={props.handleAlignment}
              aria-label="text-aligment"
              className={classes.buttonGroupA.buttonGroup}>
              <ToggleButton value="Car1" aria-label="left aligned" onClick={props.fuelchange1} className={classes.buttonGroupA.toggleButtons}>
                <label style={formStyles.buttonGroup.label1}> <img src={cityCar} style={formStyles.buttonGroup.labelImage} alt={cityCar}/><p style={formStyles.buttonGroup.labeltext}> Auto 1 </p></label>
              </ToggleButton>
              <ToggleButton  value="Car2"  aria-label="centered" onClick={props.fuelchange2} className={classes.buttonGroupA.toggleButtons}>
                <label style={formStyles.buttonGroup.label1} > <img src={sedanCar} style={formStyles.buttonGroup.labelImage} alt={sedanCar}/><p style={formStyles.buttonGroup.labeltext}> Auto 2 </p></label>
              </ToggleButton>
              <ToggleButton  value="Car3" aria-label="right aligned" onClick={props.fuelchange3} className={classes.buttonGroupA.toggleButtons}>
                <label style={formStyles.buttonGroup.label1}> <img src={miniVan} style={formStyles.buttonGroup.labelImage} alt={miniVan}/><p style={formStyles.buttonGroup.labeltext}> Auto 3 </p></label>
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
                <div style= {formStyles.button.buttonStyle}>
              <Button variant="outlined" color="primary" type={props.type} size='large'>
                HAE
              </Button>
                </div>
            </form>
        </Grid>
      </Grid>
      </div>
    </Paper>
  </Grid>
</div>
    )
}

export default Form