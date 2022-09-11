// MaxChar:
// write a function that accepts a string parameter and returns the character that appears the most. Assume there is only one character that has the most so no ties

/*  
  examples 
    maxChar("abbccc") === "c" 
    maxChar("qwoieqoieqmcqqq") === "q"
*/

const maxChar = (str) => {
    let result = ""
    let currentHighest = 0
    let obj = {}
  
    for (let i=0; i<str.length; i++){
      if (obj[str[i]]){ //checking if element exists in object
        obj[str[i]] += 1; // if true add 1
      } else {
        obj[str[i]] = 1; //if false, initialize it with 1
      } 
    }
  
    // Brute Force version: using for loop and Object.entries to convert object to array
   const charArr = Object.entries(obj) // Using Object.entries to convert object to array [["a", 1], ["b", 2], ...]
    
    for (let i=0; i<charArr.length; i++){
      const char = charArr[i][0] // "a"
      const value = charArr[i][1] // 1
      
      if (value > currentHighest){
        result = char;
        currentHighest = value;
      }
    }
  
    return result;
  };
  
  /* 
    notes here:
    //P: string
    //R: character
  
    let result = "c"
    let currentHighest = 3;
     
    {
     a: 1,
     b: 2,
     c: 3
    }
  
    //declare empty object, empty string (for result)
    //logic to count the char and add to object
    //for loop to iterate over string
    //conditional to add char as property or increment if exists 
    //for loop to loop over object
    //
  */
  
  // test cases:
  console.log(maxChar("abbccc"));
  console.log(maxChar("qwoieqoieqmcqqq"));
  