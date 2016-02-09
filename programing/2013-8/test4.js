require('./lib.js');

var n = parseInt(process.argv.slice(2));

if (isNaN(n) || n < 1) {
	console.log('Invalid Input.');
	process.exit(0);
}

var c = 3,
	sUnit = 5*5*Math.sqrt(3),
	sTotal = sUnit*1;

for (i = 0; i < n; i++) {
	sUnit /= 9;
	sTotal += sUnit*c;
	c *= 4;
}

console.log(sTotal);
