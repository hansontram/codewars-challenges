FizzBuzz Warm-up
//P: integer n 
//R: string array 
//E: n= 3 ["1","2","3"]
//P:

// decalare a variable with an empty array
// iterate through param of n by using a for loop
// conditional statements fizz, fizzbuzz, buzz, integer
// use .toString method to convert into string
// push i into empty array 
// retyrn a string array 

function FizzBuzz (n) {
    let newArr = {};
    for (let i=1; i<=n; i++){
        if (i % 3===0 && i%5===0) {
            newArr.push("Fizzbuzz")
        } else if(i%3===0) {
            newArr.push("Fizz")
        }else if (i%5===0) {
            newArr.push("Buzz")
        }else {
            newArr.push(i.toString())   //always console.log, need to convert to string
        }
    }
    return newArr
}



Pre-FizzBuzz Workout #1
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
    let newArr =[];
      for (let i=1; i<=n;i++){
        newArr.push(i)
      }
      return newArr
    }
    
    //P: positive integer
    //R: array of numbers 1 to n 
    //E: 2 --> [1,2]
    //P:
    
    // decalare var with an empty array
    // for loop, to iterate through n
    // push i to new array
    // return new array dd