//pages.js
//html filename = route.html
//
import * as fs from 'node:fs';

const workdir= process.cwd();
const htmlPath= workdir.concat(`/views`)
const cssPath= workdir.concat(`/styles`)
var status_code

function loadpg(resp, url){
  var filePath= get_filename(resp,url); 
  console.log(`filePath= ${filePath}`)

  if (!fs.existsSync(filePath)) { 
    console.log(`Err:loadpg route= ${url}`)
    resp.statusCode=404;
    //resp.statusCode=301;
    //resp.setHeader('Location','/about')
    resp.end();
    return; 
  };
  try{
    resp.statusCode=200;
    const data = fs.readFileSync(filePath, 'utf8');
    resp.write(data);
  } 
  catch{
    console.log(`Err:loadpg file ${filePath}`);
    resp.statusCode=500;
  }
    resp.end();
}

function get_filename(resp, url){
  var filepath;                //   /url  ('/' included)
  console.log(`url= ${url}`)
  if(url.includes ('.css')){
    filepath= cssPath.concat(url); 
    resp.setHeader('Content-Type', 'text/css');
  }
  else{
    filepath= htmlPath.concat(url).concat('.html'); 
    resp.setHeader('Content-Type', 'text/html');
  }
  return filepath;
}

export  {
  loadpg 
};
