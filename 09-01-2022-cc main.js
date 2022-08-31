// Add property to every object in array
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

// For example:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// After adding the property the result should be:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// The questions array is already defined for you and is not the same as the one in the example.

//for each method 
function addProperty (questions){
  questions.forEach ((element) => {
    element.userAnswer= null
    questions.push(element)
  })
  
}
console.log(questions)

//map method
function addProperty (questions){
  const object = questions.map((element) => ({
    ...element ,
    usersAnswer: null
  }));
console.log(object)
}

//for loop method
function addProperty (questions){
    for (let i =0; i<questions.length;i++){
      questions[i].usersAnswer = null
    }
    console.log(questions)
  }
  
  
  // test
  var myQuestions = [{
      question: "What's the currency of the USA?",
      choices: ["US dollar", "Ruble", "Horses", "Gold"],
      corAnswer: 0
  }, {
      question: "Where was the American Declaration of Independence signed?",
      choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
      corAnswer: 0
  }];
  
  addProperty(myQuestions);


//   Sort array by string length
//   Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//   For example, if this array were passed as an argument:
  
//   ["Telescopes", "Glasses", "Eyes", "Monocles"]
  
//   Your function would return the following array:
  
//   ["Eyes", "Glasses", "Monocles", "Telescopes"]
  
//   All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
    array.sort((a, b) => a.length - b.length);
     return array
   };