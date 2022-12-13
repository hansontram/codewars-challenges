Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

  
  function remove (string) {  
    string = string.split("")
    
    for(let i=0; i<=string.length; i++){
      if (string[string.length-1]=="!")
    string.pop()
    }  
    return string.join("")
  }