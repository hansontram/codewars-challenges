Reversed Words

Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//declare a variable holding empty array 
//declare variable using split method
//run for loop through array
//push words to empty array
//return empty array 

function reverseWords(str){
    var reverse = [];
    var words = str.split(" ");
    for(let i=words.length-1; i>=0; i--){
      reverse.push(words[i]);
      
    }
    return reverse.join(" ")
  }


  function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }