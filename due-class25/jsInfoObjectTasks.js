/*
==== Hello, Object ====
Write the code, one line for each action:
1. Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object.
*/
let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// check that name is no longer a property of user & that user.name is now undefined
console.log("name" in user) 
console.log(user.name)

/*
==== Check for Emptiness ====
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/
let schedule = {}

let isEmpty = obj => {
  for(let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true
}

/*
==== Sum Object Properties ====
We have an object storing salaries of our team. 

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

// METHOD 1
let sum$ = obj => {
    let salaries = []
    
    // create an array of just the salaries
    for (let key in obj) {
      // add the property value (the actual salary number to array)
      salaries.push(obj[key])
    }

    // sum  & return the salaries
    return salaries.reduce((sum, current) => sum + current, 0)
}
  
// store function call in variable sum
let sum = sum$(salaries)
console.log(sum) // 390

// METHOD 2
let sum2 = obj => {
    let sum = 0;
    for (let key in obj) {
      // add salary to sum each iteration
      sum += obj[key];
    }
    // sum them with reduce
    return sum
  }

/*
==== Multiply Numeric Property Values by 2 ====
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  let multiplyNumeric = obj => {
    for (let key in obj) {
      // if the property value is a number, multiply it by 2
      if (typeof obj[key] === 'number') {
        obj[key] *= 2
      }
    }
  }
  
  multiplyNumeric(menu)
  console.table(menu)