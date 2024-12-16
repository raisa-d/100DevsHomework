// import http module that's included with node.js
import http from 'http';
// import FS module
import fs from 'fs/promises';
import url from 'url';
// path module gives utilities to work wtih file paths
import path from 'path'; 
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);  // takes file url turns it into a path
const __dirname = path.dirname(__filename); // use path module current path of file you're in

console.log(`Filename: ${__filename}`, `Directory Name: ${__dirname}`);


// create a server 
// using createServer method that takes in a function. The function will take in a request and a response
const server = http.createServer(async (req, res) => {
    try {
        if(req.method === 'GET') {
            let filePath;
            
            // creating router (different routes have different pages)
            if(req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about') {
                filePath = `${__dirname}/public/about.html`;
            } else {
                throw new Error('Not Found');
            };

            // now we have filePath variable after conditional
            const data = await fs.readFile(filePath); // have fs module read the file (we set the accurate file path above in conditional)
            res.setHeader('Content-Type', 'text/html');
            res.write(data); // write teh current data/current html file to the page
            res.end();
        } else {
            throw new Error('Method not allowed');
        };
    } catch(error) {
        res.writeHead(500, { 'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }

    /* can set header values here such as contentType, an authorization key, etc.
    res.setHeader('Content-Type', 'text/html');
    if you want to manually set the status code
    res.statusCode = 404;
    */
    /* send text to client - in this case, the browser
     one line using writeHead method
        framework like express, you don't have to end the stream it'll do it automatically
        // end method. you can send a response body within the end method if you want
        res.end('<h1>Hello World</h1>');
     */
});

// we have to listen on a port. listen method takes in a port and you can pass in a function so you can do something after it connects
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});