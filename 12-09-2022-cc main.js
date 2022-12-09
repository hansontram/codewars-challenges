// Problem 3
List Filtering

In this kata you will create a function that takes a list of non-negative integers and 
strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



//declare variable with empty array 
// for loop 
// conditional comparing to data type 
//push to empty array if number
// return array 


function listFilter (arr) {
    let result = []
    for (let i=0; i<arr.length; i++){
        if(typeof(arr[i])==="number"){
            result.push(arr[i])
        }
    }
    return result 
}

//Problem 2

Your friend invites you out to a cool floating pontoon around 1km off the beach. 
Among other things, the pontoon has a huge slide that drops you out right into the ocean,
a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness 
under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make 
it easier... as you do the mental calculations in the water you either freeze when you realise 
you are dead, or swim when you realise you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you 
if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin 
will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".



//sharkDistance,sharkSpeed,pontoonDistance, youSpeed, dolphin
//Alive or Shark Bait 

//conditional for shark, 1/2 if true
// 

function sharkPontoon = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    const sharkSpeed = dolphin ? sharkSpeed / 2: sharkSpeed
    const sharkTime = sharkDistance / actualSharkSpeed
    const humanTime = pontoonDistance / youSpeed
    const sharkWillEatYou= sharkTime >= humanTime

    return sharkWillEatYou ? "Alive" : "Dead"
}