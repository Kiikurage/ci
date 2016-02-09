var s = 'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb' +
    'abcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdbabcdb',
    t = 'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda' +
    'becdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecdabecda',
    n = s.length,
    m = t.length;

var i, j
memo = [];

for (i = 0; i < n + 1; i++) {
    memo[i] = [];
    for (j = 0; j < m + 1; j++) {
        memo[i][j] = 0;
    }
}
var cnt = 0, //呼び出し回数
    cnt2 = 0; //キャッシュヒット回数

function maxSubstr(c1, c2) {
    cnt++;
    if (c1 >= n || c2 >= m) return 0;

    //メモを利用
    if (memo[c1][c2] > 0) {
        cnt2++;
        return memo[c1][c2];
    }

    //sの先頭とtのマッチング
    var s0 = s.charAt(c1),
        c2new = -1;
    for (i = c2; i < t.length; i++) {
        if (t.charAt(i) === s0) {
            c2new = i + 1;
            break;
        }
    }

    if (c2new === -1) {
        //マッチなし。次の文字へ。
        return memo[c1][c2] = maxSubstr(c1 + 1, c2);
    }

    //ここをマッチさせるべきか、見送るべきか。
    return memo[c1][c2] = Math.max(1 + maxSubstr(c1 + 1, c2new), maxSubstr(c1 + 1, c2));
}
console.log(maxSubstr(0, 0));
console.log('cash: %d%(%d/%d)', Math.round(100*cnt2/cnt), cnt2, cnt);
