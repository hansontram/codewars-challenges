// Warmups 

// Stringy Strings
// write me a function stringy that takes a size and returns a string of alternating '1s' 
// and '0s'.

// the string should start with a 1.
// a string with size 6 should return:'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

//P: a number (size)
//R: string of alt 1 and 0s
//E: 2 --> 10
//P:

//var with empty string
//for loop, starts at 1, iterates until i<=n, increment 
//conditional if i % 1 ===0 return 1
// else return 0
//add string to variable 
//return variable 

function stringy (n){
    let str = ""
    for (let i=1; i<=n, i++){
        if (i%2===0){
            str += "0"
        }else{
            str += "1"
        }
    }
    return str
}

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

My solution
var isAnagram = function(test, original) {
    let a = test.toLowerCase().split("").sort((a,b) => a-b)
    let b = original.toLowerCase().split("").sort((a,b) => a-b)
    
  if (a===b){
    return true
  } else {
    return false 
  }
   
  };


  Solution
  var isAnagram = function(test, original) {
    let a = test.toLowerCase().split("").sort().join("")
    let b = original.toLowerCase().split("").sort().join("")
    

  if (a==b){
    return true
  } else {
    return false 
  }
   
  };

  var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };
  
  
  function isAnagram (test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  }