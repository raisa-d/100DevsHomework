/*
=== 1 ===
The Sum of a Range
COME BACK to do next step
*/

// range function with start, end, and an optional argument of step
let range = (start, end, step=1) => {
    // place to store range
    let rangeNums = []
    
    // positive step
    if (step >= 0) {
      // loop through range and add each number to array
      for (let i = start; i <= end; i+=step) {
        rangeNums.push(i)
      } 
      
      // negative step
    } else if (step <= 0) {
      for (let i=start;i>=end;i+=step) {
        rangeNums.push(i)
      }
    }
    
    // return array
    return rangeNums
  }
  
  // function to sum together numbers
  let sum = arr => arr.reduce((sum, current) => sum + current, 0)

// ** NEXT STEP: MAKE IT SO THE DEFAULT STEP IS -1 IF THE START IS A LARGER 
// NUMBER THAN THE END AND 1 OTHERWISE

/*
=== 2 ===
Reversing an Array
*/

// Task: Return a new reversed array without using arr.reverse() method
let reverseArray = arr => {
  // place to put new array
  let newArray = []
  
  // use unshift to add items to beginning of list, therefore reordering them
  arr.forEach(item => newArray.unshift(item))
  
  return newArray
  
}

reverseArray(['a', 'b', 'c', 1, 2, 3])

// Task: Reverse the array in place
// ** not sure how their answer worked...
let reverseArrayInPlace = arr => {
  for(let i = 0; i < arr.length; i++) {
    // at index i, delete none and insert last element of array at index i
    arr.splice(i, 0, arr.pop())
  }
  return arr
}

reverseArrayInPlace(['a', 'b', 'c', 1, 2, 3])

/*
=== 3 ===
A List
COME BACK - so confused about the prompt even lol
*/


/*
=== 4 ===
Deep Comparison
COME BACK - so confused also lol
*/
