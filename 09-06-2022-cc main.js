// Reversing Words In A String
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string) {
  let arr = reverse.split(" ");
  let rev = [];
  for (let i = arr.length - 1; i > -1; i--) {
    rev.push(arr[i]);
  }
  return rev.join(" ");
}

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

//P: string
//R: reversed string
//E: "hi there"  --> "there hi"
//P:

//store .split() method in an array variable
//create an empty array variable
//for loop, starting at the last index, running to [0], decrease increment
//push element to array
//return string, join together
