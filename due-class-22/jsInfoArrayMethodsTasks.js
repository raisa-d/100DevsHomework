/* 
====== Task 1 ======
turn dash-separated words into camelCasing 
*/

// METHOD 1: using map, if else, slice
let camelize = str => {

    // map string
    return str.split('-').map((word, index) => {
      // if it is the first word, just keep the word as is
      if (index === 0) {
        return word
        // if it is the second word, make the first letter uppercase and then put add rest of the word
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    }).join('')
  }
  
  camelize('hello-there')

// METHOD 2: map array, ternary operator, slice
let camel2 = str => str.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')

camel2('hello-there')

/* 
====== Task 2 ======
Filter range:
write a function that accepts an array and looks for elements in array that are equal to or in between numbers a and b, then returns a new array
*/
let filterRange = (arr, a, b) => 
  // look at each item in array, compare with a and b, return if within range
  arr.filter(item => item >= a && item <= b)

let list = [1, 2, 3, 12, 8, 15, 19, 20]

filterRange(list, 18, 21)

/*
====== Task 3 ======
Filter range in place:
same as task 2 except modify the existing array instead of 
creating and returning a new one
*/

// MY ANSWER -- their sandbox tests said this was wrong but it seems to work for me
let filterRangeInPlace = (arr, min, max) => {
  // for each number in array, if it is <= min || >= max then remove it from the list using splice
  arr.forEach((num, i, _) => {
    if (num < min || num > max) {
      arr.splice(i, 1);
    }
  })
  return arr
}

// THEIR ANSWER
let filterInPlace2 = (arr, a, b) => {
    // loop through array. set i to 0 because indexing. loop thru until you get to arr.length (because last index number will be arr.length - 1), increment by 1
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i]
      
      // if value is outside of range, remove it
      if (value < a || value > b) {
        // remove it at the index number of the current item and only remove 1 item
        arr.splice(i, 1)
        /* NOT REALLY SURE WHY YOU NEED TO INCREMENT IT DOWN */
        i--
      }
    }
  }
let numList = [1, 6, 7, 9, 10, 12]
filterInPlace2(numList, 5, 10)

/*
====== Task 4 ======
sort an array of numbers in decreasing order
*/
let compare = (a, b) => {
    if (a < b) return 1; // if the first value is less than the second, return 1 because we'd want it to be first in the list
    if (a == b) return 0;
    if (a > b) return -1;
  }
  
  let nums = [1, 3, 20, -20, 6, -2, 2]
  
  nums.sort(compare)

// THEIR SOLUTION:
nums.sort((a, b) => b - a);

/*
====== Task 5 ======
Create a sorted copy of an array of strings
*/
let strArray = ['mermaid', 'fairy', 'siren']

function sortedCopy(arr) {
  // slice creates a copy of the array, sort sorts it lexicographically
  return arr.slice().sort()
}

/*
====== Task 6 ======
Calculator Extender 
*/
class Calculator {
  
  // list of math methods calculator has
  methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };
  
  // calculate method
  calculate = str => {
    str = str.split(' ')
    
    // create variables for each number & the operator
    let num1 = Number(str[0])
    let operator = str[1]
    let num2 = Number(str[2])
    
    // error handling. if there is no operator or any
    // of the inputs are not numbers, return NaN
    if (!this.methods[operator] || isNaN(num1) || isNaN(num2)) {
      return NaN;
    }
    
    // index methods with the operator, then pass in num1 
    // and num2 to those functions
    return this.methods[operator](num1, num2);
  }
  
  // addMethod method
  addMethod = (name, func) => {
    this.methods[name] = func;
  }
}

// instantiation of calculator objects
let calc = new Calculator;

calc.addMethod('*', (a, b) => a * b)
calc.addMethod('/', (a, b) => a / b)
calc.addMethod('**', (a, b) => a ** b)
calc.calculate('20 ** 2')

/* 
ORIGINAL ATTEMPT
class Calculator {
  
  // calculate method
  calculate = str => {
    str = str.split(' ')
    
    // create variables for each number
    let num1 = Number(str[0])
    let num2 = Number(str[2])
    
    return str.includes('+') ? num1 + num2 : str.includes('-') ? num1 - num2 : 'Oops, you didn\'t enter a valid equation'
  }
  
  // addMethod method
  addMethod = (name, func) => name

}

// instantiation of calculator objects
let calc = new Calculator;

// call calculate method
calc.calculate('12 + 20')
*/

/*
====== Task 7 ======
Map to Names
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
*/
let dan = {name: 'dan', age: 28}
let raisa = {name: 'raisa', age: 23}
let luca = {name: 'luca', age: 2}
let pepper = {name: 'pepper', age: 1}

let users = [dan, raisa, luca, pepper]

let names = users.map(user => user.name)

console.log(names)

/*
====== Task 8 ======
Map to Objects
You have an array of user objects, each one has name, surname, and id. Write the code to create another array of objects with fullName and id
*/
let rai = {
  name: 'Raisa',
  surname: 'D',
  id: 1
}

let lp = {
  name: 'Lookie Pookie',
  surname: 'D',
  id: 4
};

let users2 = [rai, lp];

// wrap object in parenthesis because JS will get confused with double {} in this scenario
let usersMapped = users2.map(user => ({fullName: `${user.name} ${user.surname}`,
  id: user.id}));

/*
====== Task 9 ======
Sort Users By Age
Write the function sortByAge(users) that takes an array of objects with an age property and sorts them by age
*/
let irene = {name: 'Irene', age: 72};
let oma = {name: 'Ann', age: 102};

let matriarchs = [oma, irene]

let sortByAge = arr => {
  // comparison function
  let compare = ((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age === b.age) return 0;
    if (a.age > b.age) return 1;
  })
  
  return arr.sort(compare)
}

sortByAge(matriarchs)

/*
====== Task 10 ======
Shuffle an Array
** was a bit confused about this. why is the i incremented down (i--)?
*/
let shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    // get a random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));
    
    // swap the places of the two elements
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

/*
====== Task 11 ======
Get Average Age
Write a function that takes in an array of objects with the age property and returns the average age of said objects
*/
// get average age
let naima = {name: 'Naima', age: 23};
let moose = {name: 'Moose', age: 23};
let sam = {name: 'Sam', age: 32}

let friends = [naima, moose, sam]

let getAverageAge = arr => {
  // create a list of ages
  let ages = arr.map(person => person.age)
  
  // sum ages
  let sum = ages.reduce((sum, currentNum) => sum + currentNum, 0)
  
  // return average (sum divided by number of ages)
  return sum/(arr.length)
}

getAverageAge(friends)

/* 
THEIR SOLUTION: 
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
*/

/*
====== Task 12 ======
Filter Unique Array Members
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
*/
let items = ['mermaid', 'fairy', 'nymph', 'mermaid', 'cat', 'witch', 'witch', 'wizard']

let unique = arr => {
  let uniqueItems = []
  // for each item in list, if that item is NOT already in uniqueItems, add it 
  arr.forEach(item => {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item)
    }
  })
  return uniqueItems
}

unique(items)

/*
====== Task 13 ======
Create Keyed Object from Array
*/

let group = [
  {id: 'luke', name: 'Luke M.', age: 23},
  {id: 'gian', name: 'Gian C.', age: 23}
]

// make the accumulator start as an empty object which we will add to. for each item in the list, the item's id will be set equal to item so it still has all the same information but the key is 
let groupByID = arr => arr.reduce((obj, item) => {
  obj[item.id] = item
  return obj
}, {})

groupByID(group)