var LinearRandomGenerator = require('./LinearRandomGenerator.js'),
	h = new LinearRandomGenerator(1103515245, 12345, 10);

console.log(h.checkSpan());
