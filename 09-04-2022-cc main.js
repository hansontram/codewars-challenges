In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]


    //Parameter: array of numbers
    //Return: return a list, array 
    //Example: * [1, 2, 3, 4]  -> [4, 3, 2, 1]
    //Pseudo:
    
    //declare a variable w/ empty array
    //for loop, start at the end 
    //push i to empty array
    //return new array 

function reverseList(list) {
    let result= []
    for (let i=list.length-1; i>=0; i--){
     result.push(list[i])
    }
    return (result)
    }
    

    function reverseList(list) {
        return list.reverse();
      }