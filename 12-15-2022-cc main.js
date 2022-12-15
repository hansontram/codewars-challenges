//PROBLEM 1
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


// array 
// index of nnumber between two numbers 

// variable with .sort method 
// return sorted[1] from .indexOf parameter


function middle (array){
    let sorted = [...array].sort((a,b)=> a-b)
    return array.indexOf(sorted[1])
}
    



//PROBLEM 2

Some really funny web dev gave you a sequence of numbers from his API 
response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers 
represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.




// array of strings 
// array of numbers 

//declare a variable holding an empty array 
//for loop
//use Number method
//push each element to empty array 
//return the array 


function convert (strArr) {
    let arr = []
    for (let i=0;i<strArr.length;i++){
        arr.push(Number(strArr[i]))
    }
    return arr
}