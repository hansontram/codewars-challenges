// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let sum = 0;
    for (let i=1; i<=num; i++){
      sum += i
    }
    return sum 
  }
  
  //P: number
  //R: summation of every number 
  //E: 2 --> 1 + 2 = 3
  //P:
  
  // declare sum variable with 0
  // run a for loop, starting at 1, running until i=num, iterate through
  // add i to sum variable 
  // return sum 