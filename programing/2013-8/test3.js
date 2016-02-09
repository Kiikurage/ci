require('./lib.js');

var n = 2;

var c = 3,
	s = 5*5*Math.sqrt(3),
	sTotal = s*1;

for (i = 0; i < n; i++) {
	s /= 9;
	sTotal += s*c;
	c *= 4;
}

console.log(sTotal);
