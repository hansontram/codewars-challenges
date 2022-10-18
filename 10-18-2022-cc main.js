Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.




//my solution 
var filterString = function(value) {
    let arr = value.split(" ")
    let answer = arr.filter(x => typeof x === 'number' )
    return answer.join(' ')
  }
  

  var filterString = function(value) {
    let arr = value.split('')
    let num = []
    for(let i = 0; i < arr.length; i++){
      if(isNaN(arr[i]) === false){
        num.push(arr[i])
      }
    }
    return +num.join('')
  }

  var FilterString = function(value) {
    var result = "";
    for(var i = 0; i < value.length; i++){
      if(!isNaN(value[i]))
        result += value[i];
    }
    return parseInt(result);
  }