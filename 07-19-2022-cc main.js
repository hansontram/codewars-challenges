n JavaScript, your code is running in a function, let us step by step complete your first JS function.

Look at this example:

      --------keyword "function"
      |       ----your function name  
      |       |    ---if needed, some arguments will appear in parentheses
      |       |    |
    function myfunc(){  ---------your function code will starting with "{"
      //you should type your code here
    }----------------------------ending with "}"
If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

function printWordToScreen(){
  var somewords="This is an example."
  console.log(somewords)
}
If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method. You will use it a lot!

Task
Please refer to two example above and write your first JS function.

mission 1:

use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

mission 2:

use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

mission 3:

type the console.log() in the next line (don't forget to put the str in the parentheses).

When you have finished the work, click "Run Tests" to see if your code is working properly.



const quarterOf = (month) => {
    if (month <= 3){
      return (1);
    } else if (month === 4 || month === 5 || month === 6){
      return (2);
    } else if (month === 7 || month === 8 || month === 9){
      return (3);
    } else {
      return (4)
    }
    
  }