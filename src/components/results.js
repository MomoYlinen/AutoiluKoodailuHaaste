import React,{useState,useEffect} from 'react'
import divStyles from '../styles/stylesDiv'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/useStyles'
import Paper from '@material-ui/core/Paper';
import '../styles/dev.css'


const Results = (props) => {

    const classes = useStyles()

    const [show,setShow] = useState(true)

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 10);
    
    return () => clearInterval(timeout)
    
    },)

    useEffect(() => {
        const showdif = setInterval(() => {
            if(show === true){
                setShow(false)
            }else{
                setShow(true)
            }
        },4000)
        return () => clearInterval(showdif)
    },[show])
    

    return (
    <>
        <Grid container className={classes.grid} spacing={2} padding='50px'>
            <Paper className={classes.paper}>
                <Grid item xs={12}>
                    <Grid container padding='10px'>
                <Grid item xs={12}>
                    <Grid container padding='10px' justify="center">
                        <Typography variant='h3'>
                            <div style={divStyles.results.results}>
                                Tulokset
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className={fadeProp.fade}>
                    <Grid container padding='10px' justify="center" className={classes.gridSeparations}>
                        <Typography variant='h5'>
                            <div style={divStyles.results.results}>
                                Etäisyys
                             </div>
                            <div style={divStyles.results.resultsHeader}>
                                {props.distance} Km
                            </div>
                     </Typography>
                    </Grid>
                    </div>
                </Grid>
                <Grid item xs={3}>
                <div className={fadeProp.fade}>
                    <Grid container padding='10px' className={classes.results.results} justify='center'>
                        <Typography variant='h5'>
                            <div style={divStyles.results.resultsHeader}>
                                Nopeus
                            </div>
                        </Typography>
                        <Typography variant='subtitle1'>
                            <div style={divStyles.results.showResults}>
                                {props.speed1} Km
                            </div>
                            <div style={divStyles.results.showResults}>
                                {props.speed2} Km
                            </div>
                        </Typography>
                    </Grid>
                    </div>
                </Grid>
                <Grid item xs={5}>
                <div className={fadeProp.fade}>
                    <Grid container padding='10px' className={classes.results.results} justify='center'>
                        <Typography variant='h5' className={classes.results.resultsHeader}>
                             <div style={divStyles.results.resultsHeader}>
                                Matka-aika
                            </div>
                        </Typography>
                        <Typography variant='subtitle1'>
                            <div style={divStyles.results.showResults}>
                                {props.timeCoverted1}
                            </div>
                            <div style={divStyles.results.showResults}>
                                {props.timeCoverted2}
                            </div>
                        </Typography>
                    </Grid>
                    </div>
                </Grid>
                <Grid item xs={4}>
                <div className={fadeProp.fade}>
                { show ? <Grid container padding='10px' className={classes.results} justify='center'>
                        <Typography variant='h5' className={classes.results.resultsHeader}>
                            <div style={divStyles.results.resultsHeader}>
                                Kulutus
                            </div>
                        </Typography>
                        <Typography variant='subtitle1'>
                            <div style={divStyles.results.showResults}>
                                {props.convertedFuelUse}
                            </div>
                            <div style={divStyles.results.showResults}>
                                {props.convertedFuelUse2}
                            </div>
                        </Typography>
                    </Grid>:
                    <Grid container padding='10px' className={classes.results} justify="center">
                        <Typography variant='h5' className={classes.results.resultsHeader}>
                            <div style={divStyles.results.resultsHeader}>
                                Kulutus
                            </div>
                        </Typography>
                        <Typography variant='subtitle1'>
                            <div style={divStyles.results.showResults}>
                                {props.fuelused100}
                            </div>
                            <div style={divStyles.results.showResults}>
                                {props.fuelused200}
                            </div>
                        </Typography>
                    </Grid>}
                    </div>
                </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <div className={fadeProp.fade}>
                    <Grid container className ={classes.results.answerBox}>
                        <Typography variant='h5'>
                            <div style={divStyles.results.answerStyle}>
                                Kulkemalla  {props.speedDifference} kilometriä nopeampaa saavutettaan {props.moreGas} 
                                lyhyempi matka-aika, mutta polttoainekulutus kasvaa {props.lessTime} litraa.
                            </div>
                        </Typography>
                    </Grid>
                </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" padding ='20px 0px 0px 0px'>
                        <div style={divStyles.results.answerButton}>
                        <Button variant="contained" color="primary" type='button' onClick={props.handlereturn}>
                            HAE UUDESTAAN
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </>
    )
}

export default Results