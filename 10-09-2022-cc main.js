

Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].




//My solution 

 //declare two variables to return later
  //for loop 
  //conditional if positive push to array 
  //if negative add to sum var
  //return [length, sum]

function countPositivesSumNegatives(input) {
    let positive = []
    let negative = 0
    for (let i=0; i<=input.length; i++){
      if (input[i] > 0){
        positive.push(input[i])
      } else if (input[i] < 0){
        negative += input[i]
      }
    }
    return [positive.length, negative]
    
  }
  

  
  //correct solution
  function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return [];
    }
    let posCount = 0;
    let negSum = 0;
    for (let i = 0; i < input.length; i++) {
       if (input[i] > 0) {
        posCount++;
      } else {
        negSum += input[i];
      }
    }
    return [posCount, negSum];
  }