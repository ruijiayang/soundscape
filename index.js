/* index.js is the entry point for running the web application */

var server = require('./server');

server().listen(3000);
console.log("Server listening on port 3000!");