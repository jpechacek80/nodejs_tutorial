//console.log(global);
//
var x=0;

global.setTimeout(()=>{
  console.log('in the timeout');
  clearInterval(stop);
},4000);
const stop = setInterval(() =>{
  console.log(`Count= ${x}`);
  x++;
},1000);
