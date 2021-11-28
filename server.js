var http = require('http');

function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("You have a website.");
    res.end();
    console.log("Succesfull request.");
}

http.createServer(onRequest).listen(8000);
console.log("Server available");

