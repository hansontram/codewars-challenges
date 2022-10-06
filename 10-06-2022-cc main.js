Grasshopper - Array Mean

Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7


//P: array of numbers
//R: number (mean)

//declare variable of 0
//iterate through array, start at 0, iincrement
//add each element to variable of sum 
//return sum / arr.length 


//solution 1
var findAverage = function (nums) {
    let sum = 0;
    for (let i=0; i< nums.length; i++){
      sum = sum + nums[i]
    }
    
    return sum / nums.length
  }



//solution 2
  const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;