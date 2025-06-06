//sample_module.js 
function greet (arg)  {
  console.log(`hello,  ${arg}`);
};

const meet=(arg) =>{ console.log(`I'm ${arg}`); };

function add8 (num_arg){
  return num_arg+8;
};

const function cb (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!!');
  console.log(`request made`);
  res.end();
}

module.exports = {add8, greet, meet};
