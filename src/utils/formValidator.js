const formValidator = (speed1,speed2,distance,fuelUse) =>{
      
    if (speed1 === '' || speed2 === '' || distance === ''){
      window.alert('Syötä pyydetyt arvot!')
      return false
    }else if(speed1 < 0 || speed2 < 0 || distance < 0) {
      window.alert('Anna positiivinen luku!')
      return false
    }else if (fuelUse === 0){
      window.alert('valitse automalli!')
      return false
    }else{
      return true
    }
  }

export default formValidator