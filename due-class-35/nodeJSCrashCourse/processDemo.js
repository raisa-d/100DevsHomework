// argv
console.log(process.argv);

// process.env
console.log(process.env.LOGNAME)

// id of nodeJS process: pid
console.log(process.pid);

// current working directory
console.log(process.cwd());

// title
console.log(process.title);

// memory usage
console.log(process.memoryUsage());

// update()
console.log(process.uptime());

// register process event listeners
process.on('exit', (code) => {
    console.log(`About to exit with code ${code}`);
});

// exit() - exit process and you can pass in a code where 0 means success and 1 is a general error
process.exit(0);
console.log('Hello from after exit'); // this wont get logged because it exits the process

// node processDemo