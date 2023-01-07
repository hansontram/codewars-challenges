Return the sum of n that is given starting at 1

//initialize variable with 0 
//for loop 
//add index to sum variable 
// return sum variable 


function summation (num){
    let sum = 0
    for (let i=1;i<=num; i++){
        sum += i
    }
    return sum 
}

//Problem #2

Complete the function that accepts a string parameter, and reverses each word 
in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"




function reverser (str){
    let sep = str.split(" ");
    let reverse = sep.map(word => word.split('').reverse().join() )

    return reverse.join()
}

