// BUILDING API

import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'Luca'},
    {id: 2, name: 'Mama'},
    {id: 3, name: 'Guppy'},
];

// Logger middleware to log the url and method whenever a request is made
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // next is a function that says ok this is done, lets move onto the next middleware
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if(user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    };
    res.end();
};

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // event listener. on data event, execute callback function
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body); // turn JSON into JS object
        users.push(newUser);
        res.statusCode = 201; // successful and something was created
        res.write(JSON.stringify(newUser)); // turn JS object into JSON
        res.end();
    });
};

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
};

const server = createServer((req, res) => {
        logger(req, res, () => {
            jsonMiddleware(req, res, () => {
                if(req.url === '/api/users' && req.method === 'GET') {
                    getUsersHandler(req, res);
                } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                    getUserByIdHandler(req, res);
                } else if(req.url === '/api/users' && req.method === 'POST') {
                    createUserHandler(req, res);
                } else {
                    notFoundHandler(req, res);
                };
            });
        });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});