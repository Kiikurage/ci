require('./lib.js');

var d = parseFloat(process.argv[2]);

if (isNaN(d)) {
	console.log('Invalid Input.')
	process.exit(0);
}

console.log(A(d, function(x, y){
	return x >= 0 &&
		x <= 10 &&
		y >= 0 &&
		y <= 10;
}, -30, -30, 30, 30));
