// Warmups 
// * @param {number} n
//  * @return {string[]}

//    Given an integer n, return a string array answer (1-indexed) where:
  
//   answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//   answer[i] == "Fizz" if i is divisible by 3.
//   answer[i] == "Buzz" if i is divisible by 5.
//   answer[i] == i (as a string) if none of the above conditions are true
  
//   Example 1:
  
//   Input: n = 3 or fizzBuzz(3)
//   Output: ["1","2","Fizz"]
  
//   Input: n = 5 or fizzBuzz(5)
//   Output: ["1","2","Fizz","4","Buzz"]
  
//   Input: n = 15 or or fizzBuzz(15)
//   Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
//  */

// test cases
// console.log(fizzBuzz(3))
// console.log(fizzBuzz(5))
// console.log(fizzBuzz(1000))

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

//P: integer, n 
//R: i, buzz, fizz, string array
//E: n=3 --> Fizz
//P:

//store a empty array in a var
//for loop, starts at 1, iterate until n, increment 
//conditonal (i%3), (i%5), (i%3 && i%5), else 
//push each result into the variable 
//return the var

function fizzy (n) {
    let arr = []
    for (let i=1; i <=n; i++){
        if (i%3===0 && i%5===0){
            arr.push("Fizzbuzz")
        } else if(i%3===0){
            arr.push("Fizz")
        } else if(i%5===0){
            arr.push("Buzz")
        } else {
            arr.push(i)
        }
    }
    return arr
}




function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  }

  function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
  }

//   my solution
function hello(name) {
  if (name){
    return "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!"
  } else{
    return 'Hello, World!'
  }
  
}