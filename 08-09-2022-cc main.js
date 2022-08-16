// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//function
//use replace method
// replace vowels with !

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }

//   You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

//function
//create conditional
// if square l*w, if poly l*l + w*w
//return 
const areaOrPerimeter = function(l , w) {
    if (l === w){
        return l * w
    } else {
        return (l + l) + (w + w)
    }
  };