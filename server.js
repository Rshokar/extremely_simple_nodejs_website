var http = require('http');

function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("You have a website.");
    res.end();
}

http.createServer(onRequest).listen(80);
console.log("Server available");

