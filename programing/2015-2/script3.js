var LinearRandomGenerator = require('./LinearRandomGenerator.js'),
	f = new LinearRandomGenerator(161, 2457, 24);

var n = 0,
	i;

for (i = 1; i < 100; i+=2) {
	if (!(f(i) & 1)) {
		n++;
	}
}

console.log(n);
