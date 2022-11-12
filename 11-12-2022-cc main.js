This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.





//solution 1
function accum(s) {
    const result = []
    const lowerStr = s.toLowerCase()
  
    for(let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase()
      for(let j = 0; j < i; j++) {
        str += lowerStr[i]
      }
      result.push(str)
    }
  
    return result.join("-")
  }



  //solution 2
  function accum(s) {
    return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
  }


  //solution 3
  function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }