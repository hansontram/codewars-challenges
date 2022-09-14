Warmup Reverse Words In A String

//P: string of words
//R: string
//P:

// declare var with empty string
// declare var with .split to have array\
// run for loop to iterate through array
//push element to array
//return str, joinm together

function reverseWords (str){
    let reverse = []
    let arr = str.split(" ")
    for (let i=arr.length-1; i>=0; i--){
        reverse.push(arr[i])
    }
    return reverse.join(" ")
}

// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

   //P: string , name
   //R: strings
   //E: ("Adam"), "Adam does not play banjo");
   //P:
   
   // create conditional, use .charAt to check for r or R
   // if true return 'plays banjo' if false return 'does not play banjo'

function areYouPlayingBanjo(name) {
    if (name.charAt(0)=== "r" || name.charAt(0)=== "R") {
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
   }


   function areYouPlayingBanjo(name) {
    
    if (name[0] == 'R' || name[0] == 'r')
      return name + " plays banjo";
    else
      return name + " does not play banjo";
  }
   

