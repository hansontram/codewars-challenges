// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average 
// student in your class.

// You receive an array with your peers' test scores. Now calculate the average and 
// compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating 
// the average point you may add your point to the given array!


//solution 1
// create function
function betterThanAverage (classPoints, yourPoints) {      
   // declare variable to add results to 
    let classAvg = 0;
    //  use loop to add all test scores from array
    for (let i = 0; i< classPoints.length; i++) {           
    }
    // divide by the amount in array
   classAvg = classAvg / classPoints.length;     
   // create conditional, return true if better and else false           
    if (yourPoints > classAvg) {
        return true;
    } else {
        return false;
    }

}

