Enumerable Magic #25 - Take the First N Elements

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    return arr.slice(0,n)
    }
    
    
    //P: arr and number (n)
    //R: array
    //P:
    
    //use slice method
    //starting at 0
    //end at n
    //return arr

    function take(arr, n) {
        let res = [];
        for (let i = 0; i < n; i++) {
          if (i < n && i < arr.length) {
           res.push(arr[i]); 
          } 
        }
        return res;
      }
      