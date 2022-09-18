// Third Angle of a Triangle


You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.


function otherAngle(a, b) {
    return 180 - (a +b)
  }

  const otherAngle = (a, b) => 180 - a - b
  
  //P: two integers, angles
  //R: return num, third angle 
  //E: 
  //P:
  
  //add a, b together 
  //subtract from 180
  //return the difference 