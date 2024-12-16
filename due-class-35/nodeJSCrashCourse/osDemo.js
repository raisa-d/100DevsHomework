import os from 'os';

// userInfo() - give you info on current system user
console.log(os.userInfo());

// totalmem() - get memory in bytes
console.log(os.totalmem());

// freemem() - free memory
console.log(os.freemem());

// cpus() - info on CPUs. gives an object for every core on system
console.log(os.cpus());