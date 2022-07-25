// Complete the function that takes two integers (a, b, where a < b) and 
// return an array of all integers between the input parameters, including them.

// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]



function between(a,b) {               //create function that takes two integers (a,b)
    let arr = []
    for (let i = a; i<=b; i++){     //use loop to return array between input numbers
        arr.push(i)                 // push new output to the array
    }
    return arr                      // return the array
}


//----------------------------

// Your classmates asked you to copy some paperwork for them. You know 
// that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0



// create function with n and m
function paperwork (n,m) {   
    // create conditional           
    if (n>=0 && m>=0){
        // pages = n * m 
        return n * m; 
        // if negative integer, return 0
    } else if (n<0 || m<0){
        return 0
    }
}..