import http from 'node:http';
import path  from 'node:path';
import * as fs from 'node:fs';

const workdir= process.cwd();

const fext = {
  '.html': ['text/html', '/views'],
  '.js':   ['text/javascript', '/js'],
  '.css':  ['text/css', '/styles'],
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

function loadpg (resp, url){
  var webfile=url;
  var extname= path.extname(url);
  if(extname=='') {
    extname='.html';
    if (url == '/')  webfile = '/index.html';
      else webfile =url.concat('.html')
  }
  
  const contentType = fext[extname][0] || 'application/octet-stream';
var filepath;
    filepath= workdir.concat(fext[extname][1]).concat(webfile); 
 
    console.log(filepath)
    console.log(contentType)
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        fs.readFile('./404.html', (err, content) => resp.end(content, 'utf-8'));
      } else {
        resp.writeHead(500);
        resp.end(`Server Error: ${err.code}`);
      }
    } else {
      resp.writeHead(200, { 'Content-Type': contentType });
      resp.end(content, 'utf-8');
    }
  });
}



export  {
  loadpg 
};
