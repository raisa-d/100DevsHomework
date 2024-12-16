// import with ES modules use curly braces because it is not default 
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts())

console.log(`There are ${getPostsLength()} posts on this blog.`)

// EXAMPLE: CommonJS import method
// const {generateRandomNumber, celsiusToFahrenheit} = require('./utils');

// console.log(`Random number: ${generateRandomNumber()}`)

// console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit(0)}`) // 32