// Ben has a very simple idea to make some profit: he buys something and sells it again. 
// Of course, this wouldn't give him any profit at all if he was simply to buy and sell 
// it at the same price. Instead, he's going to buy it for the lowest possible price and 
// sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given 
// list/array.

//solution 1

// create function that takes in array
function minMax (arr) {
    // creat variable to store in new array 
   let newArr = []
   // grab the minimum
   let max = Math.max(...arr)
   // grab the maximum 
   let min = Math.min(...arr)
   // push both to new array
   newArr.push(min, max)
   return newArr
}

__________________________________________

// Given a list of digits, return the smallest number that could be formed from these
// digits, using the digits only once (ignore duplicates).

// make a function taking in the values 
// sort them from smallest to biggest
// display the 3 smallest numbers

function minValue(values) {
    let array = [... values];
    let arraySet = [... new Set(array)];
    let arraySort = arraySet.sort( (a, b) => a - b);
    let arrayJoin = arraySet.join("");
    
    return parseInt(arrayJoin) 
  }

  __________________________________________

//   Code as fast as you can! You need to double the integer and return it.

let doubleInteger = (i) => {return i * 2}

______________________________________________

// Write function RemoveExclamationMarks which removes all exclamation marks
//  from a given string.

function removeExclamationMarks(s) {
    return s.replace('!'/g,'')
  }