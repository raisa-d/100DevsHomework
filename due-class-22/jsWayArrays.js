/* 
==== TASK 1 ====
Musketeers
*/

let musketeers = ['Athos', 'Porthos', 'Aramis']

// show each element using a for loop
for(let i=0; i < musketeers.length; i++) {
  console.log(musketeers[i])
}

// add 'D\'Artagnan' to arary
musketeers.push('D\'Artagnan')

// show each array element using forEach
musketeers.forEach(x => console.log(x))

// remove Aramis from array
musketeers.splice(musketeers.indexOf('Aramis'), 1)

// show each element using for of
for (let i of musketeers) {
  console.log(i)
}

/* 
==== TASK 2 ====
Sum of Values: write a program that calculates and shows sum of values in an array
*/

const values = [3, 11, 7, 2, 9, 10];

// reduce method
let addUp = arr => arr.reduce((sum, current) => sum + current)

// using for loop
let sum = arr => {
  let sum = 0;
  for(let i of arr) {
    sum += i
  }
  return sum
}

addUp(values)
sum(values)

/* 
==== TASK 3 ====
Array Maximum: write a program that calculates and shows maximum value of an array
*/

// using Math.max() and spread operator
let findMax = arr => Math.max(...arr)

// using arr.sort()
let findMaxAgain = arr => {
  // sort array in descending order
  arr = arr.sort((a, b) => b - a)
  // max is at index 0
  return arr[0]
}

findMax(values)
findMaxAgain(values)

/* 
==== TASK 4 ====
List of Words: Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
*/

// empty array to store words in
let words = [];

// boolean to handle whether while loop runs or not
let running = true;

while (running) {
  // ask user for a word
  let userWord = prompt('Enter a word').toLowerCase()
  
  // append word to words array if they are not 'stop'
  if (userWord !== 'stop') {
    words.push(userWord)
  }
  
  // if word is stop, exit loop
  if(userWord === 'stop'){
    running = false;
  }
}

// print list of words
for (let word of words) {
  console.log(word)
}