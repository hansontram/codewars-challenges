// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

const capitalize = s => {
    const arr = s.split('');
    let a = '', b = '';
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        a += arr[i];
        b += arr[i].toUpperCase();
      } else {
        a += arr[i].toUpperCase();
        b += arr[i];
      }
    }
    
    return [a, b];
  };
  
  //P: string
  //R: array of two strings
  //E: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
  //P: 

  function capitalize(s) {
    const S = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
      if (i & 1) {
        a += s[i]
        b += S[i]
      } else {
        a += S[i]
        b += s[i]
      }
    }
    return [a, b]
  }


  function capitalize(s) {
    let odd = s.split("");
    let even = s.split("");
    for (let i = 0; i < s.length; i++) {
      if (i % 2 == 0) {
        even[i] = even[i].toUpperCase();
      } else {
        odd[i] = odd[i].toUpperCase()
      }
    }
  return [even.join(""), odd.join("")]
};