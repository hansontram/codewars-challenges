Flatten and sort an array


Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:





//my solution
function flattenAndSort(array) {
  let result = array.reduce((initial, current) => initial.concat(current), []);
  return result.sort((a, b) => a - b);
}

//solution 1
function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}

//solution 2
function flattenAndSort(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      newArray.push(array[i][j]);
    }
  }

  return newArray.sort((a, b) => a - b);
}
