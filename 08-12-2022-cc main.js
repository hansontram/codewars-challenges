// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let str = s.split(" ");
    let a = [];
    for(let i = 0; i<str.length; i++){
      a.push(str[i].length);
    }
    return Math.min(...a);
  }
  
// have to identify the shortest string 
// using a loop?
// use .length to count character of string
//math.min