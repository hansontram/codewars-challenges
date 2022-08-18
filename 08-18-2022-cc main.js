//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function sumOfEach (a,b) {
    let sumOfA = a.reduce((acc, curr) => acc + Math.pow(curr, 2), 0) 
    let sumofB = b.reduce((acc, curr) => acc + Math.pow(curr, 3), 0)
    if (sumOfA > sumOfB){
        console.log (true)
    }
}


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(arr){
    let newArr = []

    for (let i=0; i <=arr.length; i++){
        if (arr[i] % i === 0){
           newArr.push(arr[i])
        }
    } 

    return newArr
}
console.log( isMultiple([68, -1, 1, -7, 10, 10] ))


// Leon's Answer
// function isMultiple(arr){
//     return arr.filter((e,i) => e % i === 0
// }
//use filter to filter out elements not mulitples of their own index
// use % to determine if elements are divisible 