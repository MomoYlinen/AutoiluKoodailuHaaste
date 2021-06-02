import divStyles from '../styles/stylesDiv'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/useStyles'
import Paper from '@material-ui/core/Paper';


const Results = (props) => {

    const classes = useStyles()

    return (
    <>
        <Grid container className={classes.grid} spacing={3} padding='50px'>
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
                <Grid item xs={12} className={classes.gridSeparations}>
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
                </Grid>
                <Grid item xs={3}>
                    <Grid container padding='10px' className={classes.results.results}>
                        <Typography variant='h5'>
                            <div style={divStyles.results.resultsHeader}>
                                Nopeus
                            </div>
                        </Typography>
                        <Typography variant='h6'>
                            <div style={divStyles.results.showResults}>
                                {props.speed1} Km
                            </div>
                            <div style={divStyles.results.showResults}>
                                {props.speed2} Km
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container padding='10px' className={classes.results.results} justify='center'>
                        <Typography variant='h5' className={classes.results.resultsHeader}>
                             <div style={divStyles.results.resultsHeader}>
                                Matka-aika
                            </div>
                        </Typography>
                        <Typography variant='h6'>
                            <div style={divStyles.results.showResults}>
                                {props.timeCoverted1}
                            </div>
                            <div style={divStyles.results.showResults}>
                                {props.timeCoverted2}
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container padding='10px' className={classes.results}>
                        <Typography variant='h5' className={classes.results.resultsHeader}>
                            <div style={divStyles.results.resultsHeader}>
                                Kulutus
                            </div>
                        </Typography>
                        <Typography variant='h6'>
                            <div style={divStyles.results.showResults}>
                                {props.convertedFuelUse}
                            </div>
                            <div style={divStyles.results.showResults}>
                                {props.convertedFuelUse2}
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className ={classes.results.answerBox}>
                        <Typography variant='h5'>
                            <div style={divStyles.results.answerStyle}>
                                Kulkemalla  {props.speedDifference} kilometriä nopeampaa saavutettaan {props.moreGas} 
                                lyhyempi matka-aika, mutta polttoainekulutus kasvaa {props.lessTime} litraa.
                            </div>
                            <div style={divStyles.results.answerButton}>
                        <Button variant="contained" color="primary" type='button' onClick={props.handlereturn}>
                            RETURN
                        </Button>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </>
    )
}

export default Results