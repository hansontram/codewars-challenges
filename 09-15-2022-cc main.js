Warm-up Summation 

//P: a number
//R: sum of numbers
//E: 2 --> 1+2=3
//P:

// declare var with 0
// for loop
// add i to var
// return var

function summation (n){
let sum = 0
for(let i =1; i<=n; i++){
    sum+=i
}
return sum
}

// Simple Fun #176: Reverse Letter
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    let reverse = ""
    let newStr= str.replace(/[^a-z]/gi,''); 
    for (let i=newStr.length-1; i>=0; i--){
      reverse = reverse + newStr[i]
    }
    return (reverse)
    
    
  }
  
  //P: string
  //R: string that is reversed (only numbers)
  //E: krishan -- nahsirk
  //P: 
  
  // var with empty string
  // variable using .replace method to get rid of numbers
  // for loop, iterating from end, decramenting
  // add letters to string
  // return the string


  function reverseLetter(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}