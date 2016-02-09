require('./lib.js');

var d = parseFloat(process.argv[2]);

if (isNaN(d)) {
	console.log('Invalid Input.')
	process.exit(0);
}

var a1 = A(d, function(x, y) {
		return Math.pow(x-5, 2) + Math.pow(y-5, 2) <= Math.pow(5, 2);
	}, -30, -30, 30, 30),

	a0 = A(d, function(x, y) {
		return x >= 0 &&
			x <= 10 &&
			y >= 0 &&
			y <= 10;
	}, -30, -30, 30, 30);

console.log((a1/a0)*(1/4));
