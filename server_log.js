var http = require('http');

var server = http.createServer(function (request, response) {
    console.log("Client request ", request.method, request.url);
    
    // Log the headers
    console.log("Headers: ", request.headers);

    // Log the body data
    request.on('data', function(chunk) {
        console.log("Body data: ", chunk.toString());
    });

    // End the response
    response.writeHead(200);
    response.end();
});

server.listen(8080,`192.168.0.18`);

