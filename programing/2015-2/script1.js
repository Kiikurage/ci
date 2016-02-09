var LinearRandomGenerator = require('./LinearRandomGenerator.js'),
	f = new LinearRandomGenerator(161, 2457, 24);

console.log(f(100));
