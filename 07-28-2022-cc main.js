// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.


// create function taking street price, discount, and holiday
// let percent=discount / 100 
// let difference= percent * normPrice
// return holiday / difference 
// round down

//solution 1

function dutyFree(normPrice, discount, hol){
    let percent = discount / 100
    let difference = percent * normPrice
    return Math.floor(hol / difference)

}