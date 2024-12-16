import { EventEmitter } from 'events';

// great for building real-time apps bc you can create custom events and listen for them. can also listen for  built-in events

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log(`Hello ${name}`);
};

function goodbyeHandler(name) {
    console.log(`Goodbye ${name}`);
};

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'Luca');
myEmitter.emit('goodbye', 'Luca');

// Error handling by listening to error event
myEmitter.on('error', (err) => {
    console.log('An error occured: ', err);
});

// simulate error
myEmitter.emit('error', new Error('Something went wrong'));

// node eventsDemo