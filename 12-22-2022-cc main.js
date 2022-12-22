//array of numbers
//yes, yes, or no 


//conditional
// if arr.sort((a,b)=> a-b) === array return yes ascending
// if arr.sort((a,b)=> b-a) === array return yes descending
// else return no

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

//my solution (incorrect)
function isSorted(array){
    if (array.sort((a,b)=> a-b) === array){
        return "yes, ascending"
    } else if (array.sort((a,b)=> b-a) === array){
        return "yes, descending"
    } else {
        return "no"
    }
}

//solution 1
function isSortedAndHow(array) {
    const asc = [...array].sort((a, b)  => a - b).toString();
    const dsc = [...array].sort((a, b)  => b - a).toString();
    
    return array.toString() === asc ? "yes, ascending" : array.toString() === dsc ? "yes, descending" : 'no';
  }


(1)The spread operator (...) is used to create a shallow copy of the array argument. This is done because the sort method modifies the original array, and we want to preserve the original array.

(2)The sort method is used to sort the copy of the array in ascending and descending order. The sort method takes a comparison function as an argument, which determines the order in which the elements should be sorted. In this case, the comparison function uses the subtraction operator (a - b) to sort the elements in ascending order, and the reverse (b - a) to sort the elements in descending order.

(3)The toString method is used to convert the arrays to strings. This is done because the === operator cannot be used to compare arrays directly, but it can be used to compare strings.

(4)The ternary operator (? :) is used to return the appropriate string based on the comparison of the original array and the sorted arrays. If the original array is equal to the sorted array in ascending order, the function returns "yes, ascending". If the original array is equal to the sorted array in 
descending order, the function returns "yes, descending". If neither of these conditions is true, the function returns "no".