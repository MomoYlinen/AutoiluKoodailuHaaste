import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3)
      },
    },
    backround:{
      background:'#d32f2f',
      height:'100vmin',
    },
    grid: {
      flexGrow: 1,
      flexDirection: 'row',
      background:'#d32f2f',
      padding:'20px 15x 15px 10px',
    },
    paper: {padding:'25px 15px 25px 15px',
    width:'500px',
    height:'100vhmin',
    margin:'40px auto',
     border:'1px solid',
    },
    buttonGroupA:{
      buttonContainer: {height:'70px', padding:'10px 0px 100px 0px'},
      buttonGroup: {width:'100%', padding:'10px'},
      toggleButtons: {width:'33%', padding:'10px', height:'70px'},
      label: {width:'80%', height:'60px'},
      label1: {width:'90%', height:'60px'},
      labelImage: {width:'55px'},
    },
    switch: {
      switchLabel: {padding:'10px'}
    },
    address:{
      addressStyle: {display:'flex', flexDirection:'row'},
      addressField: {padding:'0px 15px 0px 0px'  },
      addressLabel: {padding:'0 0 10px 120px'}
    },
    form:{
      formStyle: {justify:'center'},
      formCentering: {padding: '0px 0px 11px 120px'},
      formCenteringzero: {padding: '0px 0px 0px 0px'},
      formlabel: {padding: '0px 0px 20px 0px'}
    },
    buttonStyle:{
      buttonStyle: {padding: '0px 0px 0px 170px'},
      buttonStyle2: {padding: '10px 0px 0px 60px'}
    },
    results:{
      results: {    display: 'flex',flexDirection: 'column', padding: '10px '},
      resultsHeader: {padding: '0px 0px 40px 0px' },
      showResults: {padding: '0px 0px 20px 0px' },
      answerStyle: {padding: '10px 5px 10px 5px' },
      answerBox: {padding:'50px 0px 0px 0px', items:"center"}
    },
    gridSeparations:{padding :'20px 0px 0px 0px'}
  }));

  export default useStyles