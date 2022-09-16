// # ➕ Summation WARMUP

// ```jsx
// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example:

// / summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// //P: number
// //R: summation of every number 
// //E: 2 --> 1 + 2 = 3
// //P:

// // declare variable with 0
// // run a for loop
// // add i to variable with 0
// // return numbervar summation = function (num) {
 

//  let sum = 0;
//   for (let i=1; i<=num; i++){
//     sum += i
//   }
//   return sum 
// }

// Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
    let arr = [];
    for (let i=integer; i<=limit; i++){
       if (i%integer===0){
         arr.push(i)
       }
    }
    return arr
  }
  
  //P: a value, integer
  //R: arrays of numbers, list of multiples up to another value
  //E: (2,6) --> [2,4,6]
  //P:
  
  // create var holding empty array
  // run for loop, starting at integer, iterate until limit, increment 
  // conditional statement, if [i] % integer === 0 
  // push [i] to empty array
  // return array