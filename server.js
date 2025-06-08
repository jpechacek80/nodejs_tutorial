import http from 'node:http';
import {loadpg} from './pages.js';

const server = http.createServer();
var count=0;

server.on("request",(req,resp)=>{
    console.log(count, req.method,req.url); // Logs the HTTP method
    count++;
    //console.log(req.headers); // Logs the headers
  if (req.method=='GET')
    loadpg(resp, req.url);
})

  server.on('data', function(chunk) {
    console.log("Body data: ", chunk.toString());
})

server.listen(8080,`192.168.0.18`, error => {
  if (error) 
    return console.error(error);

})

