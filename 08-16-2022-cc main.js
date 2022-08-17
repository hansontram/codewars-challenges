// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// use .map to apply a function to each index and return new array
// use .max() for highest number
// us .min() for lowest number

// use for loop


  function highAndLow(numbers){
    let array = numbers.split(" "); // converting string into array
  
    let numArray = array.map(str => parseInt(str)) //string of num to num
    console.log(...numArray)
    
    let high = Math.max(...numArray) // store max
    let low = Math.min(...numArray) // store min
    
    return `${high} ${low}` // display high and low
  }
______________________________________________________-

function highAndLow(numbers){
    let str = numbers.split(" ") // string of num to strings inside array
   //  console.log(str)
     
     let numArray = str.map( str => parseInt(str)) // run map to convert string to number
   //   console.log(numArray)
     
   let sortArray = numArray.sort((a,b) => a-b) // sort from least to highest
   //   console.log(sortArray)
   
   let high = sortArray[sortArray.length-1]
    
   let low = sortArray[0]
    
     
     return `${high} ${low}` 
   }