require('./lib.js');

var d = parseFloat(process.argv[2]);

if (isNaN(d)) {
	console.log('Invalid Input.')
	process.exit(0);
}

var f = new Polygon([
	Point(0, 0),
	Point(5, 5*Math.sqrt(3)),
	Point(10, 0)
]);

f.flactalize();
f.flactalize();

var a = A(d, function(x, y) {
	return f.isInner(Point(x, y));
}, -10, -10, 10, 10);

console.log(a);
