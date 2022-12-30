FizzBuzz Review

// array of numbers 
// array of numbers in reverse order 
// return 
//  [1,2,3,4] [4,3,2,1]

// empty array variable 
// for loop 
// .push to array 
// return array 

function reverseOrder(arr){
 let array = [];
 for(let i=arr.length-1; i>=0; i--){
    array.push(arr[i])
 }
 return array 
}

const reverseOrder = (arr) => {
    return arr.split("").reverse().join("")
}
