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

var C = 0,
    w = 0;

for (w = 0; w <= W; w++) {
    for (i = 1; i <= n; i++) {
        if (w < wv[i-1][0]) {
            C = memo[w][i - 1];
        } else {
            C = Math.max(memo[w - wv[i-1][0]][i - 1] + wv[i-1][1], memo[w][i - 1]);
        }

        memo[w][i] = C;
    }
}

console.log(memo[W][n])
