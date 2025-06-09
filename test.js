//test.js
const mimeTypes = {
  '.html': ['text/html','views'],
  '.js': ['text/javascript','js' ],
  '.css': ['text/css','styles'],
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

console.log ('ContentType=')
console.log (mimeTypes['.html'][0])
console.log (mimeTypes['.html'][1])
