var C = [3, 2, 1, 3, 0, 2],
    A = 620;

var V = [1, 5, 10, 50, 100, 500],
    c = [0, 0, 0, 0, 0, 0],
    i = V.length;

while (i--) {
    c[i] = Math.min(C[i], parseInt(A/V[i]));
    A -= c[i]*V[i];
}

console.log(c);
