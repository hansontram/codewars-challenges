// Given an integer n, return a string array answer (1-indexed) where:
  
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true




//P: an intenger, n
//R: return a array of strings 
//E: n=3, ["1","2","Fizz"]
//P: 

//declare variable = []
// for loop
// conditional statement, Fizz, Buzz, fizzbuzz, i
// push the i to variable
// return the new string array 

function fizzBuzz (n) {
    let result = []
    for (let i=1; i <= n; i++){
        if (i % 3 ===0){
            result.push("Fizz")
        } else if (i % 5===0){
            result.push("Buzz")
        }else if (i % 3 ===0 && i % 5===0){
            result.push("FizzBuzz")
        }else {
            return.push(i.toString)

        }
    }
    return result 
}


// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }
  greet ("Ryan")
  
  //P: name, string
  //R: String
  //E: ...
  //P:
  
  //function
  //return template literals
  //change invoked function and add "" to ryan


  //Stringy Strings
//   write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.



//declare variable to store empty string
//for loop to iterate through number
// add result of i%2 (1 or 0) to str
// return str
function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }


