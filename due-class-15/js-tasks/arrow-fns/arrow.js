// Replace Function Expressions with arrow functions in the code below:

// First Way: only changing the function expressions into arrow functions, as it asked for
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

// Second Way: Just to challenge myself, I made the entire function an arrow function and used ternary operators instead of an if/else statement

let askV2 = (question, yes, no) => {
    (confirm(question)) ? yes() : no()
}

askV2(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
)