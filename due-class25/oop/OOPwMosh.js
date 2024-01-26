// object literal syntax
const circle = {
    // properties
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    // method
    draw: function() {
        console.log('draw')
    }
}

circle.draw()

// factory function returns an object
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    }
}

const circle2 = createCircle(1)
console.log(circle2)

// constructor function
function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
}

const another = new Circle(1)
console.table(another)


/*
// GETTERS AND SETTERS
// a getter is a function that is used to read a property
// a setter is a function that is used to change or set a property

function Circle(radius) {
  // properties
  this.radius = radius;

  let defaultLocation = {x: 0, y: 0}
  
  // method that will allow user access to defaultLocation without actually accessing that variable
  this.getDefaultLocation = () => defaultLocation
  
  this.draw = () => {
    console.log('draw');
  }
  
  // this creates a "read only" property that can not be modified
  Object.defineProperty(this, 'defaultLocation', {get: () => defaultLocation}, {set: value => {
    if (!value.x || !value.y) {
      throw new Error('Invalid Location')
    }
    defaultLocation = value
  }})
  
}

const circle = new Circle(10)
circle.defaultLocation = 1

console.table(circle)


*/

function Stopwatch() {
  // set private variables startTime, endTime, duration, running (boolean)
  let duration = 0;
  let startTime, endTime, running;
  
  // methods for start, stop, and resetting the watch
  this.start = () => {
    // if stopwatch isn't currently running, set startTime equal to current time
    if (!running) {
      running = true;
      startTime = new Date();
    // otherwise, throw an error
    }  else throw new Error('The stopwatch is already started.')
  }
  
  this.stop = () => {
    // if stopwatch is already stopped, throw error
    if(running) {
      running = false;
      endTime = new Date();
      // calculate duration here. will be in ms and want to convert to seconds
      let seconds = ((endTime.getTime() - startTime.getTime()) / 1000)
      duration = `${seconds} seconds`
    } else throw new Error ('The stopwatch is already stopped.')
  }
  
  this.reset = () => {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }
  
  // creating a getter so user can get duration
  Object.defineProperty(this, 'duration', {get: () => duration})
  
}

let sw = new Stopwatch()