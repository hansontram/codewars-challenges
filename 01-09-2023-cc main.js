// string 
// string reversed 
// return 

//split, reverse, join 

// empty array 
// variable with split method
// for loop 
// starting at last index
// push to array 
// return 

function reverse (str){
    let result = []
    let split = str.split(" ")

    for (let i=split.length-1; i>=0;i--){
        result.push(split[i])
    }
    return result.join()
}
