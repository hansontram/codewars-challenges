//string
//string w multiples

abcd -> a-Bb-Ccc-Dddd

//decalre var with empty array 
//decalre var with .toLowerCase
//for loop through lowercase
//declare var holding uppercase
//for loop 
//adding to empty array 
//


function mumbling (str){
   let result = []
   let lowerStr = str.toLowerCase()
   for(let i=0;i<lowerStr.length;i++){
    let str = lowerStr[i].toUpperCase()
    for (let j=0; j=i;i++){
        str += lowerStr[i]
    }
    result.push(str)
   }
   return result.join("-")
}


function mumble (str){
    return str.split("").map((c,i)=> (c.toUpperCase() + c.toLowerCase().repeat(i))).join("-")
}