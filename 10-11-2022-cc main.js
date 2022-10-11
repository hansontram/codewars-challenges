Sort array by string length 


Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


// solution 
function sortByLength (array) {
    array.sort((a, b) => a.length - b.length);
     return array
   };


//PROBLEM 2

Find the Capitals
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );



//solution
var capitals = function (word) {
	let output = [];
  for (let i=0; i<word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      output.push(i);
}
}
  return output;
};