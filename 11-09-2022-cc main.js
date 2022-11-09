Add length

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.





function addLength(str) {
    let newStr = str.split(' ')
    let arr = []
    for (let i=0;i<newStr.length;i++){
      arr.push(`${newStr[i]}`+` ${newStr[i].length}`)
    }
      return arr
    }
    
    
    //string
    //array with length of each word added to each element
    
    //var with split
    //var with empty array
    //run for loop on var w split
    //template literal + length 
    //push 
    //return 



    function addLength(str){
        return str.split(" ").map( word => `${word} ${word.length}`)
      }