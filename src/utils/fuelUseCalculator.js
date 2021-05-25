const fuelUseCalculator = (fuelUse,speed) => {
    const consumptionMultiplier = 1.009
    let fuel = fuelUse
    for(let i = 1; i <=speed; i++) {
      fuel*=consumptionMultiplier
    }

    return fuel

  }

export default fuelUseCalculator