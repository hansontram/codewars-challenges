//Problem 1

Complete the function that accepts a string parameter, and reverses each word 
in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

//string parameter
//reverse each word in the string 

//intialize a split variable
//map methoed
// split, reverse, join 
//return join


//solution

function reversestring (str){
    let string = str.split(" ")
    let result = string.map(word => word.split("").reverse().join())

    return result.join()
}




//Problem 2

Palindrome strings
A palindrome is a word, phrase, number, or another sequence of characters 
which reads the same backward or forward. This includes capital letters, 
punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input 
is a number, convert it to a string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false


//solution 


// string or number
// true or false

// convert param to string 
// var with split.reverse.join 
// conditional 
// compare reversed to string
// true if ===, false if !=


function palindrome (word){
    let str = word.toString()
    let reverse = str.split("").reverse().join("")

    if (str === reverse){
        return true
    } else{
        return false
    }
}


// Problem 3

➕ Sum of Numbers


Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and 
return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)



//solution 

// a , b
// sum of the differences between them 

// variable with 0 
// for loop 
// start at a, end at b 
// add to the sum 
// return sum 

function sumOfNum (a,b){
    let sum = 0 

    if (a === b){
        return a
    } else if (a < b){
        let x=a; y=b 
    } else if (b < a){
        let x= b; y=a
    }


    for (let i=x; i<=y; i++){
        sum += i
    }
    return sum 
}


// Problem 4
Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.


//solution 2
function _if(bool, func1, func2) {
    if (bool){
       func1()
    } else {
       func2()
    }
  }
