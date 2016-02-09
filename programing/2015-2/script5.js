var LinearRandomGenerator = require('./LinearRandomGenerator.js'),
	g = new LinearRandomGenerator(1103515245, 12345, 26);

console.log(g(2));
console.log(g(3));
