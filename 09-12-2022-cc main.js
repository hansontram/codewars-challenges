//P: a list, array 
//R: return a list, array 
//E:  [1, 2, 3, 4]  -> [4, 3, 2, 1]
//P: 

// set a variable with empty array
// iterate through the array for loop 
// push i into empty array]
// return array 

function reverseList (list) {
    let reverse = [];
    for (let i = list.length-1; i >= 0; i--){
        reverse.push(list[i])
    }
    return reverse
}


// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//P: strings
//R: Strings
//E: 
//P:

// declare variable with empty string
// use .split method to split string up into arrays
// iterate through array with for loop
// .toUppercase [0]
// push to empty string and use .join method 
// return string 

//solution 1
String.prototype.toJadenCase = function () { 
    let str = this
    return str.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  
  //solution 2
  String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };


// Attempt
  String.prototype.toJadenCase = function () {
    let str = this;
    let result = ""
   let newStr= this.split(" ")
   for (let i=0; i<=newStr.length;i++){
     console.log(newStr[i][0].toUppercase())
   }
  };