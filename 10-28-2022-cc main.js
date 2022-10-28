Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer


//solution 1
function upArray(arr){
    if (arr.find(el => el >= 10 || el < 0) || arr < 1) return null;
    if (arr[arr.length - 1] + 1 !== 10) {
      arr[arr.length - 1] += 1;
      return arr;
    }
    let tempArr = [...arr];
    let i = arr.length - 1;
    while (arr[i] + 1 === 10) {
      if (i === 0 && arr[i] + 1 === 10) {
        tempArr[i] = 0;
        tempArr.unshift(1);
        break;
      }
      tempArr[i] = 0;
      tempArr[i - 1] += 1;
      i--;
    }
    return tempArr;
  }


//solution 2

  function upArray(arr) {


    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (var j = arr.length - 1; j > -1; j--) {

        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1;
            break;
        } else {
            arr[j] = 0;
        }

        if (j === 0) {
            arr.unshift(1);
        }
    }


    return arr;
}