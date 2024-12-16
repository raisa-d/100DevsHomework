// import fs from 'fs';
import fs from 'fs/promises'; // importing promise version

/* ===READ FILE=== */

// readFile - callback
// takes in file location, encoding, callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
    // if (err) throw err;
    // console.log(`Callback Version: ${data}`);
// });

// readFile() - synchronous version
// this is blocking so if it's a giant file you're reading, it'll stop the rest of your code. usually want to use the async/promise version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(`Synchronous Version: ${data}`)

// readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//     .then(data => console.log(`Promise Version: ${data}`))
//     .catch(err => console.log(err));

// readFile() - Promise async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch(error) {
        console.log(error);
    };
};

/* ===WRITE FILE=== */
// writeFile() - async/await version
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file.');
        console.log('File written to...');
    } catch (error) {
        console.log(error);
    }
};

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended to...')
    } catch (error) {
        console.log(error);
    };
};

writeFile();
appendFile();
readFile();