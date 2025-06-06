//pages.js
//html filename = route.html
//
import * as fs from 'node:fs';

const dirPath= './views/'
var route;

function loadpg(resp, url){
  route=url.substring(1);
  var filePath= get_html_filename(); 
  
  if (!fs.existsSync(filePath))
  { 
    console.log(`Err:loadpg file ${filePath}`)
    resp.statusCode=404;
    return; };
  try{
    var data = fs.readFileSync(filePath , { encoding: 'utf8', flag: 'r' });
    resp.statusCode=200;
    resp.setHeader('Content-Type', 'text/html');
    resp.write(data);
  } 
  catch{
    resp.statusCode=500;
    console.log(`Err:loadpg file ${filePath}`);
  }
}

function get_html_filename(){
  return (dirPath.concat(route).concat('.html')); 
}

export  {
loadpg 
};
