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
  let newArray = []
  newArray.push(sourceArray)
  return newArray
}

function mapToDouble(sourceArray){
  let newArray = []
  newArray.push(sourceArray * 2)
  return newArray
}

function mapToSquare(sourceArray){
  let newArray = []
  newArray.push(sourceArray * sourceArray)
  return newArray
}


function reduceToTotal(sourceArray, startingPoint){
  return sourceArray.value + startingPoint.value
}

function reduceToAllTrue(sourceArray){
  
}

function reduceToAnyTrue(sourceArray){
  
}