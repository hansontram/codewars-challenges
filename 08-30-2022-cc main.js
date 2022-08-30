// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord( bool ){
    if (bool === true){  // conditional statement 
      return "Yes" // return yes if bool = true
    } else {
      return "No" // return no if bool = false
    }
  }

  


//   Complete the solution so that it reverses the string passed into it.
  
//   'world'  =>  'dlrow'
//   'word'   =>  'drow'

function solution(s){
    var o = '';  // declare a variable storing empty string
    for (var i = s.length - 1; i >= 0; i--) // for loop to run through string, starting with last index
      o += s[i];  // adding 
    return o;
  }


  function solution(str){
    return str.split('').reverse().join('');  
  }
  function solution(str){
    return str.split('').reverse().join('');  
  }