//test.js
const sdfile = require('./sample_module');
//const {greet} = require('./sample_module');   //selective import.

sdfile.greet(8);
sdfile.meet('julian');
var x= sdfile.add8(7);
console.log(x);

/**OUTPUT---
hello,  8
I'm julian
15
 * */
