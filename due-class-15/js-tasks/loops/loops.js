// The JS Way: Loops (https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md)

/*
===============
Try to code each exercise twice, once with a while loop and the other with a for, to see for yourself which one is the most appropriate.
===============
Carousel: 
Write a program that launches a carousel for 10 turns, showing the turn number each time. When it's done, improve it so that the number of turns is given by the user.
=============== 
*/

// for loop inside of an arrow function
let carousel10TurnsForLoop = () => {
    for(let i = 1; i <= 10; i++) {
        console.log(`Carousel Turn Number: ${i}`)
    }
}

// improved version: user can pass in number of turns they want
let carouselForLoop = numOfTurns => {
    for(let i = 1; i <= numOfTurns; i++) {
        console.log(`Carousel Turn Number: ${i}`)
    }
}

// while loop inside arrow function where user can pass in the number of carousel turns
let carouselWhileLoop = numOfTurns => {
    while(i <= numOfTurns) {
        console.log(`Carousel Turn Number: ${i}`)
        i++
    }
}

/*
===============
Parity:
Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
===============
*/

let parityForLoop = startingNumber => {
    for (let i = startingNumber; i <= (startingNumber + 9); i++) {
        if (i % 2 === 0) {
          console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
      }
}

let parityWhileLoop = startingNumber => {
    let i = startingNumber;
    while (i <= (startingNumber + 9)) {
        if (i % 2 === 0) {
          console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
        i++
      }
}


/*
===============
Input Validation:
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.
===============
*/

let guessANum = () => {
  let numBer;
  // chose a while loop because we don't know how long it will take for user to enter the right answer
  while(numBer !== '') {

    // get user input
    numBer = prompt('Guess a number: ')

    // conditional to evaluate if number is between 50 and 100
    if (numBer <= 100 && numBer >= 50) {
      alert('great')
      break

    } else {
      alert('take another guess')
    }
  }
}

/*
===============
Multiplication table: 
Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
===============
*/

// using for loop, arrow function, conditionals, and recursion
let multTablesFor = () => {
  let multNum = prompt('Enter a number you want the multiplication table for')

  // if number is between 2 and 9, print mult tables for that number
  if (multNum >= 2 && multNum <= 9) {
    for (let i = 1; i <= 12; i++) {
      console.log(`${multNum} x ${i} = ${multNum * i}`)
    }
  } else {
    alert('You must choose a number between 2 and 9!')
    
    // call function again so user can choose a valid number
    multTables()
  }
}

// using while loop, arrow function, conditionals, and for loop
let multTablesWhile = () => {

  let multNum;
  
  while (multNum !== '') {
    multNum = prompt('Enter a number you want the multiplication table for')

    // if number is between 2 and 9, print mult tables for that number
    if (multNum >= 2 && multNum <= 9) {
      for (let i = 1; i <= 12; i++) {
        console.log(`${multNum} x ${i} = ${multNum * i}`)
      }
      break
    } else {
      alert('You must choose a number between 2 and 9!')
    }
  }
}

/*
===============
Neither yes nor no
Write a program that plays 'neither yes, nor no' with the user. Specifically, the program asks the user to enter text until either 'yes' or 'no' is typed, which ends the game.
===============
*/

let game = () => {
  let word = prompt('Enter a word: ').toLowerCase()

  if (word === 'yes' || word === 'no') {
    alert('You won the game!')
  } else {
    alert('Wrong!')
    game()
  }
}

// while loop cut down on a lot of code
let gameWhileLoop = () => {
  let word;
  while (word !== 'yes' && word !== 'no') {
    word = prompt('Enter a word: ').toLowerCase()
  }
  alert('You won the game!')
}

/*
===============
FizzBuzz:
Write a program that shows all numbers between 1 and 100 with the following exceptions:
--> It shows "Fizz" instead if the number is divisible by 3.
--> It shows "Buzz" instead if the number is divisible by 5 and not by 3.
When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
===============
*/

let FizzAndBuzz = () => {
  for (let i = 1; i <= 100; i++) {
  
    // nums divisible by 3
    if (i % 3 === 0) {
      console.log('Fizz')
  
      // nums divisible by 5 but not 3
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

let FizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
  
    // nums divisible by 3 AND 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else {
      console.log(i)
    }
  }
}