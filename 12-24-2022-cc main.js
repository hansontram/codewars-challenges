Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.


//array of numbers
//the values that are not odd in an array 

// variable with empry array 
// for loop 
// conditional if %2 === 0
// push to array 
// return array 

function noOdds( values ){
    let arr = [];
    for (let i=0; i<values.length; i++){
      if (values[i] % 2 === 0){
        arr.push(values[i])
      }
    }
    return arr 
  }

  const noOdds = ( values ) => {
    let arr = [];
    for (let i=0; i<values.length; i++){
      if (values[i] % 2 === 0){
        arr.push(values[i])
      }
    }
    return arr 
  }
  
  
  