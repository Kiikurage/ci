function LinearRandomGenerator(a, b, m) {
	this.m = m;
	this.R = (1 << m) - 1;
	this.a = a & this.R;
	this.b = b & this.R;
	this.cacheSize = 0;
	this.cache = {
		0: 1
	};

	var instance = this.gen.bind(this);
	instance.checkSpan = this.checkSpan.bind(this);

	return instance;
}

LinearRandomGenerator.prototype.gen = function(n) {
	if (n < 1) {
		return 1;
	}

	/**
	 * Return if cache is hit.
	 */
	if (n <= this.cacheSize) {
		return this.cache[n];
	}

	var prev = this.cache[this.cacheSize],
		i = this.cacheSize+1;

	for (; i <= n; i++) {
		this.cache[i] =
			prev = (this.a*prev+this.b) & this.R;
	}

	return prev;
};

LinearRandomGenerator.prototype.checkSpan = function() {
	var val = 1,
		k = 0;

	do {
		k++;
		val = (this.a*val+this.b) & this.R;
	} while (val !== 1);

	return k;
};

module.exports = LinearRandomGenerator;
