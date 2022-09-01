// Capitalize first letter of a string
// Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

// Input	Output
// string	String
// hello World	Hello World
// i love codewars	I love codewars
// This sentence is already capitalized	This sentence is already capitalized
// 0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
// JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

// Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.

//PREP
//Paramaters: String 
//Return: return
//Example: 'string' --> 'String', 'hello world' --> 'Hello World'
//Pseudo:

function capitalize(str){
    // use charAt(0) to isolate the first letter
    //toUpperCase to capitalize
    //slice to giove start and end position 
    str.charAt(0).toUpperCase() + str.slice(1)
}

String.prototype.capitalize = function () {
    let c = this.charCodeAt(0)
    if (97 <= c && c <= 122) c -= 32
    
    return String.fromCharCode(c) + this.slice(1)
  }

//   You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.

//Paramator: 1-string, 2-integer(locate), 3-integer(mulitply)
//Return: return string
//Example: ("This is a string",3 ,5) --> "string-string-string-string-string"
//Pseudo:

function modifyMultiply (str,loc,num) {
    // use .split to split string of words into array 
    //use [loc] to use 2nd param to locate string
    // run for loop (num) times 
    // conditional for hyphen at the end 
   let word= str.split(" ")[loc]
     let result = ""
   for (let i=0; i<num; i++){
     if (i === num-1){
       result += word
     } else {
       result += word+"-"
     }
     
  }
    return (result)
  } 