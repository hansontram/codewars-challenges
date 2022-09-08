Square (n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let result = 0;
    for (let i=0; i <numbers.length; i++){
      result += Math.pow(numbers[i],2)
    }
    return result
  }
  
  //P: array of numbers
  //R: number (sum)
  //E: [1,2,2] --> 9
  //P:
  
  //variable with 0, to add each results to 
  //run for loop
  //square each number
  //add numbers to variable with 0