require('../libs/includes.js');

var L = [8, 5, 8, 5];

var C = 0;
L = L.ascendSort();

while (L.length > 1) {
    L.push(L.shift() + L.shift());
    C += L[L.length - 1];
}

console.log(C);
