// Warmups Stringy string 

// Stringy Strings

// write me a function stringy that takes a size and returns a string of alternating '1s' 
// and '0s'.

// the string should start with a 1.

// a string with size 6 should return:'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//P: takes in a number
//R: string of alternating 1s and 0s
//E:
//P:

//declare string with empty var
// iterate through the number with for loop
// i%2==0
//push to empty string
// return 

function stringyString (num){
    let str = "";
    for (let i=1; i<=num; i++){
        str += i%2
    }
    return str
}


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
  }

  
  //P: string 
  //R: string
  //E: "This is an example!" ==> "sihT si na !elpmaxe"
  //P:

  // create variable using split method converting str to array
// run for loop, iterate through each I in array
// [i] .split .reverse .join 
// return arr w join method 

Solution 1:

function reverseWords(str) {
  
  let arr = str.split(" ")
  
  for (let i=0; i<arr.length; i++){
   arr[i] = arr[i].split("").reverse().join("")
  }
   return (arr.join(" "))
}

Solution 2:


function reverseWords(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  
 return (newStr.split(" ").reverse().join(" "));
}


Solution 3:
function reverseWords(str) {
  let arr = str.split(" ")
  
  for (let i=0; i<arr.length; i++){ // iterate over original str parameter seperated by word
    let reversedStr = "";
    
    for (let j = arr[i].length - 1; j >= 0; j--){ // reverse words
      reversedStr += arr[i][j];
    }
    
    arr[i] = reversedStr
  }
    console.log(arr.join(" "))
    return arr.join(" ")
}