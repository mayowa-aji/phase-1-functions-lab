function distanceInBlocks(start, dest){
  return Math.abs(start - dest);
}

function distanceFromHqInBlocks(someValue){
  return distanceInBlocks(42,someValue)
}

function distanceFromHqInFeet(someValue){
  return distanceFromHqInBlocks(someValue) * 264;
}


function distanceTravelledInFeet(start, destination){
  return distanceInBlocks(start, destination)* 264;
}


function calculatesFarePrice(start, destination){
  let calculatesFarePrice;
  let calc = distanceTravelledInFeet(start, destination);

  if (calc < 400 ){
      return calculatesFarePrice = 0;
   }
   else if (calc > 400 && calc < 2000){
     calculatesFarePrice = calc - 400;
     return (calculatesFarePrice * 0.02);
    }
    else if (calc > 2000 && calc < 2499){
     calculatesFarePrice = 25;
     return calculatesFarePrice;
   }
  else if (calc > 2500){
    return 'cannot travel that far';
 }
}

