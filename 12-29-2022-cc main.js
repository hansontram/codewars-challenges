Remove First and Last Character Part Two

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).



const array = (arr) => {
    arr = arr.split(',')
    arr.pop()
    arr.shift()
    return arr.join(' ') === '' ? null : arr.join(' ')
  }


function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }

//uses .split to split the input string into a list based on the comma separator.
//.slice method to create new list without the first and last elements
//.join method to cocatenate elements into a single string separated by spaces 
// return 'null' if string is empty  