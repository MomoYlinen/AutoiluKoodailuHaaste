import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin:'1px',padding:'10px',
      },
    },
    formControl: {padding:'30px 0px 0px 0px'},
    grid: {
      flexGrow: 1,
      flexDirection: 'row',
      padding:'0px 10px 10px 10px',
      justifyContent:'center',
      margin: '-20px -8px -8px -8px',
      height: '100vmax',
      zeroMinWidth:'0'

    },
    paper: {padding:'20px 15px 25px 15px',
    width:'80vw',
    maxWidth:'450px',
    height:'100vhmin',
    maxHeight:'640px',
    margin:'30px 15px 30px 15px',
    border:'1px solid',
    borderRadius:'10px',
    boxShadow:'0px 5px 15px 0px  black',
    background:'#fffdf5'
    },
    buttonGroupA:{
      buttonContainer: {height:'100px', padding:'100px 0px 50px 0px',justifyContent:'center', background:'#dedede'},
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
      answerStyle: {padding: '10px 5px 20px 5px' },
      answerBox: {padding:'50px 0px 0px 0px', justifyContent: 'center'}
    },
    gridSeparations:{padding :'10px 0px 0px 0px'}
  }));

  export default useStyles