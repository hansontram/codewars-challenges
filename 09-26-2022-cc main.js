
Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)




function GetSum( a,b )
{
//if both a and b are equal return a
   if(a===b){
     return a;
   }
   var result = 0;
   
   var x = a, y = b;
 // check the larger and smaller numbers and assign them to x and y
   if(a > b) {
      x = b, y = a;
   }
 //in a loop add the numbers from the smaller one until it reaches the larger number
   for(var i = x; i <=y; i++ ) {
     result += i;
   }
   return result;
   
}




function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
 }