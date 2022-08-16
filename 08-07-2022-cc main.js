// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// function
// use parseInt
// return

const stringToNumber = function(str){
    
    return parseInt(str)
  }


//   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//   Examples (Input -> Output):
//   * "String"      -> "SSttrriinngg"
//   * "Hello World" -> "HHeelllloo  WWoorrlldd"
//   * "1234!_ "     -> "11223344!!__  "
//   Good Luck!

function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++){
      word = word + str[i] + str[i];
    };
    return word;
  };
  
  