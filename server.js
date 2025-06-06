import http from 'node:http';
import {loadpg} from './pages.js';

const server = http.createServer(function (req, resp) {
    
  if (req.method=='GET')
    loadpg(resp, req.url);
    
  req.on('data', function(chunk) {
        console.log("Body data: ", chunk.toString());
    });

    resp.end();
});

server.listen(8080,`192.168.0.18`);

