Warmup 

// In this kata you will create a function that takes in a list and returns a list
// with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//P: takes in an array 
//R: returns an array 
//E:
//P:

//create var with empty arr
//for loop(start at end, iterate until >=0, decrement)
//push each element to array 
//return array 

function reverseOrder (list){
    let reverse = []
    for (let i =list.length -1; i>=0; i--){
        reverse.push(i)
    }
    return reverse
}

Multiple of index
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68

function multipleOfIndex(array) {
    let multiples =[]
    for (let i=0; i<=array.length; i++){
        if (array[i] % i ===0){
          multiples.push(array[i])
        }
    }
    return multiples
  }
  
  //P: array of numbers
  //R: array of numbers
  //E: [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
  //P:
  
  //create var with empty array 
  //for loop, start at 0, iterate through arr.length, increment 
  //conditional if (array[i] % i ===0)
  //push array[i] to empty array 
  // return array 
  ss