// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// function main [verb, noun]
//   return verb + noun
// }

function main (verb, noun){
    return verb + noun
  }

//   Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

function apple(x){
    if (Math.pow(x,2) > 1000){
      return "It's hotter than the sun!!"
    } else{
      return "Help yourself to a honeycomb Yorkie for the glovebox."
    }
    }