Enumerable Magic - Does My List Include This?

Create a method that accepts a list and an item, and returns true 
if the item belongs to the list, otherwise false.

//P: array, number
//R: true or false 

// use includes method on arr
// return arr

// solution 1
function include(arr, item){
    return arr.includes(item)
  }


//solution 2
  const include = (arr, item) => arr.includes(item)