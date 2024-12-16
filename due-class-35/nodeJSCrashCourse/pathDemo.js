import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename() returns last portion of a path
console.log(path.basename(filePath));

// dirname() - get directory
console.log(path.dirname(filePath));

// extname() - just extension name
console.log(path.extname(filePath)); // .txt

// parse() - will give us an object with all that stuff above
console.log(path.parse(filePath)); 

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename, __dirname);

// join() - create a file path based on arguments passed in. reason for this is bc on diff operating systems there are different delimiters. linux/mac uses forwardslash, but windows uses backslash
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve() - does same as join except its always an absolute path
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);