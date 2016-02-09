global.A = function(d, fnR, minX, minY, maxX, maxY) {
	var minP = Math.floor(minX/d),
		minQ = Math.floor(minY/d),
		maxP = Math.ceil(maxX/d),
		maxQ = Math.ceil(maxY/d),
		n = 0,
		p, q;

	for (p = minP; p <= maxP; p++) {
		for (q = minQ; q <= maxQ; q++) {
			if (fnR(d*p, d*q)) n++;
		}
	}

	return n;
};


function Point(x, y){
	if (!(this instanceof Point)) return new Point(x, y);

	this.x = x;
	this.y = y;
}
global.Point = Point;


function Polygon(points){
	if (!(this instanceof Polygon)) return new Polygon(points);

	this.points = points;
}
global.Polygon = Polygon;

Polygon.prototype.isInner = function(p){
	var points = this.points,
		n = 0,
		x = p.x, y = p.y,
		p1, p2;

	for (i = 0; i < points.length; i++) {
		p1 = points[i];
		p2 = (i === points.length-1) ? points[0] : points[i+1];

		if (p1.x == x && p2.x == x) {
			if (
				(p1.y >= y && p2.y <= y) ||
				(p1.y <= y && p2.y >= y)
			) {
				return true;
			}
		} else if (
			(p.x <= p1.x && p.x > p2.x) ||
			(p.x <= p2.x && p.x > p1.x)
		) {
			yy = p1.y + (p1.y - p2.y)/(p1.x-p2.x)*(x-p1.x);

			if (yy === y) {
				return true;
			}

			if (yy > y) {
				n++;
			}
		}
	}

	return !!(n & 1);
};

Polygon.prototype.flactalize = function(n) {
	var points = this.points,
		pm1, pm2,
		dx, dy,
		sin60 = Math.sin(60*Math.PI/180),
		cos60 = Math.cos(60*Math.PI/180);

	for (i = 0; i < points.length; i++) {
		p1 = points[i];
		p2 = (i === points.length-1) ? points[0] : points[i+1];

		pm1 = Point((p1.x*2+p2.x*1)/3, (p1.y*2+p2.y*1)/3);
		pm3 = Point((p1.x*1+p2.x*2)/3, (p1.y*1+p2.y*2)/3);

		dx = pm3.x - pm1.x;
		dy = pm3.y - pm1.y;

		pm2 = Point(
			pm1.x+(dx*cos60-dy*sin60),
			pm1.y+(dx*sin60+dy*cos60)
		);

		points.splice(i+1, 0, pm1, pm2, pm3);
		i += 3;
	}
};
