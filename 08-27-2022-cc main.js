// write a function that accepts a string parameter and return the reverse of that string.

// for loop version
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i, str[i]);
    result += str[i];
    result = result + str[i];
  }
  return result;
}

reverse("reverse");
// non-for loop version
// function reverseStr (str) {
//   str.split("").reverse().join("")
// }
// console.log(reverseStr())

//test cases
/* ("reverse this string") ("racecar") */
