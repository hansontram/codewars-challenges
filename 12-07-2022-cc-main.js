String Cleaning


DESCRIPTION:
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.




// string
// return string without numbers

//variable with empty string
//for loop through str
//conditional check for data type
// add to variable if not num
//return variable 



function stringClean(s){
    // Function will return the cleaned string
    const nums = '0123456789';
    
    let result = '';
    
    for(let i = 0; i < s.length; i++){
      if(!nums.includes(s.charAt(i))){
        result += s[i];
      }
    }
    
    return result;
  }