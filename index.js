// Your code here
function mapToNegativize (sourceArray) {
  let result = []
  for(let i = 0; i < sourceArray.length; i++){
    result.push(sourceArray[i] * -1)
  }
  return result;
}
mapToNegativize(1, 2, 3, -9)

function mapToNoChange(sourceArray){
  let result = []
  for(let i = 0; i < sourceArray.length; i++){
    result.push(sourceArray[i])
  }
  return result
}

function mapToDouble(sourceArray){
  let result = []
  for(let i=0; i<sourceArray.length; i++){
    result.push(sourceArray[i] * 2)
  }
  return result
}

function mapToSquare(sourceArray){
   let result = []
  for(let i=0; i<sourceArray.length; i++){
    result.push(sourceArray[i] * sourceArray[i])
  }
  return result
}




function reduceToTotal(sourceArray, startingPoint=0){
  let total = startingPoint
  for(let i = 0; i <sourceArray.length; i++){
    total += sourceArray[i]
  }
  return total
}


function reduceToAllTrue(sourceArray){
  
}

function reduceToAnyTrue(sourceArray){
  
}