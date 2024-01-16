/*
=== TASK 1 ===
Adding Character Experience:
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
*/
const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp: 0,
    
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} strength, and ${this.xp} XP`
    }
  }
  
  aurora.describe()

/*
=== TASK 2 ===
Modeling a Dog
*/
const dog = {
    name: 'Pepper',
    species: 'Australian Labradoodle',
    size: 'medium',
    
    bark() {
      return 'WOOF!'
    }
  }
  
  console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
  console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

/*
=== TASK 3 ===
Modeling a Circle
*/
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {

  circumference() {
    return 2 * Math.PI * r
  },
  
  area() {
    return Math.PI * (r**2)
  }
}

console.log(`Its circumference is ${circle.circumference().toFixed(2)}`);
console.log(`Its area is ${circle.area().toFixed(2)}`);

/*
=== TASK 4 ===
Modeling a Bank Account
*/
const account = {
    name: 'Alex',
    balance: 0,
    
    credit(amt) {
      this.balance += amt
    },
    
    describe() {
      return `${this.name}, balance ${this.balance}`
    }
  }
  
  account.credit(250)
  account.credit(-80)
  account.describe()