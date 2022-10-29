Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.






  function isSortedAndHow(array) {
    const asc = [...array].sort((a, b)  => a - b).toString();
    const dsc = [...array].sort((a, b)  => b - a).toString();
    
    return array.toString() === asc ? "yes, ascending" : array.toString() === dsc ? "yes, descending" : 'no';
  }


  function isSortedAndHow(array){
    let sorted = array.slice().sort((a,b) => a-b)
    if (array.join('') === sorted.join('')) return 'yes, ascending'
    else if (array.join('') === sorted.reverse().join('')) return 'yes, descending'
    else return 'no'
}