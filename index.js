// Your code here

function mapToNegativize(array){
  const newArray = [];
 for(const number of array){
   const negativeNumber = number * -1
    newArray.push(negativeNumber)
 }
 return newArray
}

function mapToNoChange(array){
  const newArray = [];
  for(const element of array){

    newArray.push(element)}
    return newArray
  }

  function mapToDouble(array){
    const newArray = [];
    for(const element of array){
      const doubleNumber = element * 2
      newArray.push(doubleNumber);
    }
    return newArray
  }

  function mapToSquare(array){
    const newArray = [];
    for(const element of array){
      const squaredNumber = element ** 2
      newArray.push(squaredNumber)
    }
    return newArray;
  }

  function reduceToTotal(array, startingPoint = 0){
    let runningTotal = startingPoint
    for (const element of array){
      runningTotal += element 
    }
    return runningTotal
  }

  function reduceToAllTrue(array){
    let truthyness = true
    for(const element of array){
      if (element === false) {
        truthyness = false
      }
    }
    return truthyness
  }

  function reduceToAnyTrue(array){
    let truthyness = false
    for (const element of array){
      if (element === true) {
        truthyness = true
      }
    }
    return truthyness
  }