You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
ß




//my solution 
function twoSort(s) {
    let alpha = s.sort((a,b) => a-b)
   return alpha[0].split("").join("***")
  }
  
  
  //list of strings
  // string 
  
  //sort alphabetically 
  //first element 
  //add *** between 



//correct solution 
  function twoSort(s) {
    let alpha = s.sort()
    return alpha[0].split("").join("***")
    
   
  }
  
  
