
Row Weights

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

//P: array of numbers
//R: an array 
//E: rowWeights([13, 27, 49])  ==>  return (62, 27)
//Pseudo:


//declare two variables odd and even with 0
//for loop to iterate through array 
//conditional, if index is even add to even var, if index is odd add to odd var
//return odd and even as array



function rowWeights(array){
    let odd = 0;
    let even = 0;
    
    for (let i=0; i<array.length; i++){
      if (i%2===0){
        even += array[i]
      } else {
        odd += array[i]
      }
    }
    return [even, odd]
    
  }

  //Solution 2
  
  function rowWeights(array){
    var team1 = 0;
    var team2 = 0;
    array.forEach(function(element,index) {
      if(index % 2 == 0){
        team1 += element;
      }else{
        team2 += element;
      }
    });
    return [team1, team2];
  }
 