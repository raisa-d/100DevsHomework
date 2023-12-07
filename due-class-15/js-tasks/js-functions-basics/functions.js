/* 
==============
    Task 1
==============
*/
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

// Will the function work differently if else is removed?
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

// My answer: The function will work the same without the else because if age is greater than 18, it will end the function at the return statement and not move onto the next statement (19). If age is not greater than 18, it will skip return true and will return the confirm function instead -- doing what it would have done with the else statement.


/* 
==============
    Task 2
==============
*/
// rewrite the checkAge function (the one with the else statement) using ? or || and no if keyword in a single line.

// using ternary operator
function checkAgeTern(age) {
    // return true if age is greater than 18. else, run confirm function
    return (age > 18) ? true : confirm('Did parents allow you?')
}

// using or operator
function checkAgeOr(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

/* 
==============
    Task 3
==============
*/
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(num1, num2) {
    // if num1 less than num2
    if (num1 < num2) {
        return num1;
    
    // if num2 is less than num1 or if they are equal
    } else {
        return num2;
    }
}

// same function using ternary operator
function minV2(a, b) {
    // return a if a is less than b, else return b
    return a < b ? a : b;
}

/* 
==============
    Task 4
==============
*/
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

function pow(x, n) {
    // initialize result to base
    let result = x;
  
    // use loop to multiply result by x (itself) for n-1 times --> for example, if you did 3 to the power of 3 you'd need two iterations of the loop not three (n-1)
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    // return result
    return result;
  }

let x = prompt("What number?")
let n = prompt("Raised to what power?")

if (n < 1) {
    alert("Cannot calculate a negative power")
} else {
    alert(`${x} to the power of ${n} is ${pow(x, n)}`)
}