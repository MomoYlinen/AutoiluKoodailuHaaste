import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin:'7px',padding:'10px'
      },
    },
    formControl: {padding:'30px 0px 0px 0px'},
    grid: {
      flexGrow: 1,
      flexDirection: 'row',
      background:'#d32f2f',

    },
    paper: {padding:'40px 20px 25px 20px',
    width:'450px',
    height:'100vhmin',
    margin:'30px auto',
    border:'1px solid',
    },
    buttonGroupA:{
      buttonContainer: {height:'100px', padding:'100px 0px 50px 0px'},
      buttonGroup: {width:'100%', padding:'10px'},
      toggleButtons: {width:'33%', padding:'10px', height:'70px'},
      
    },
    form:{
      formStyle: {justify:'center',padding:'10px'},
      formCentering: {padding: '0px 0px 11px 120px'},
      formCenteringzero: {padding: '0px 0px 0px 0px'},
      formlabel: {padding: '0px 0px 20px 0px'}
    },
    buttonStyle:{
      buttonStyle: {padding: '0px 0px 0px 170px'},
      buttonStyle2: {padding: '10px 0px 0px 60px'}
    },
    results:{
      results: { display: 'flex',flexDirection: 'column', margin:'2px'},
      resultsHeader: {padding: '0px 0px 40px 0px' },
      showResults: {padding: '0px 0px 20px 0px' },
      answerStyle: {padding: '10px 5px 10px 5px' },
      answerBox: {padding:'50px 0px 0px 0px', items:"center"}
    },
    gridSeparations:{padding :'20px 0px 0px 0px'}
  }));

  export default useStyles