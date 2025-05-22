var http = require('http');       //load built-in
var dt = require('./showdate');   //load custom

//req = request object from client 
http.createServer(function (req, res) {
//header
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Greet: " + dt.greet() + "\r\n");
  res.write("Date/Time\r\n" + dt.myDateTime());
  res.write(req.url);
  res.end();
}).listen(8080)
;
