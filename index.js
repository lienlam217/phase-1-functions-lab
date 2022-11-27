function distanceFromHqInBlocks(someValue) {
   const result = someValue - 42
    return Math.abs(result)  
  }

function distanceFromHqInFeet(someValue) {
    const resultInFeet = distanceFromHqInBlocks(someValue)*264
    return Math.abs(resultInFeet)
}

function distanceTravelledInFeet(start, destination) {
    const distance = (destination - start)*264
    return Math.abs(distance)
}

function calculatesFarePrice(start, destination) {
    let fare
    const distance1 = distanceTravelledInFeet(start, destination) 
    if (distance1 <= 400) {
        fare = 0
    }
    else if (distance1 < 2000) {
        fare = (distance1 - 400)*(0.02)
    }
    else if (distance1 < 2500) {
        fare = 25
    }
    else if (distance1 > 2500) {
        fare = 'cannot travel that far'
    }
    return fare
}

