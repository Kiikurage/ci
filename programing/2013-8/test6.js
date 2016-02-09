require('./lib.js');

var d = parseFloat(process.argv[2]),
	n = parseInt(process.argv[3]);

if (isNaN(d) || isNaN(n) || n <= 0) {
	console.log('Invalid Input.')
	process.exit(0);
}

var f = new Polygon([
	Point(0, 0),
	Point(5, 5*Math.sqrt(3)),
	Point(10, 0)
]);

while (n--) {
	f.flactalize();
}

var a = A(d, function(x, y) {
	return f.isInner(Point(x, y));
}, -10, -10, 10, 10);

console.log(a);
