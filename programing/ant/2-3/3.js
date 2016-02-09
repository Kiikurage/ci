require('../libs/includes.js');

var n = 4,
    wv = [
        [2, 3],
        [1, 2],
        [3, 4],
        [2, 2]
    ],
    W = 5;

var memo = [],
    i, j;

for (i = 0; i <= W; i++) {
    memo[i] = [];
    for (j = 0; j <= n; j++) {
        memo[i][j] = 0;
    }
}

var C,
    w,
    wp;

for (w = 0; w <= W; w++) {
    for (i = 1; i <= n; i++) {
        j = 1;
        wp = w-wv[i - 1][0]*j;
        C = memo[w][i - 1];
        while (wp >= 0) {
            C = Math.max(C, memo[wp][i - 1] + wv[i - 1][1]*j);
            j++;
            wp = w-wv[i - 1][0]*j;
        }

        memo[w][i] = C;
    }
}

console.log(memo[W][n]);
console.log(memo);
