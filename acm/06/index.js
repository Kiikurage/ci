//Make Purse Light
//http://www.deqnotes.net/acmicpc/p0006/ja

var lines = require('fs').readFileSync('/dev/stdin', 'utf-8')
    .trim().split('\n'),
    l = 0;

while (true) {
    if (lines[l] === '0') break;

    var originalPrice,
        price = originalPrice = parseInt(lines[l]),
        counts = lines[l + 1].split(' ').map(Number),
        result = [0, 0, 0, 0],
        value = 0,
        back, n;

    n = Math.min(Math.ceil(price / 10), counts[0]);
    result[0] += n;
    price -= 10 * n;
    value += 10 * n;

    n = Math.min(Math.ceil(price / 50), counts[1]);
    result[1] += n;
    price -= 50 * n;
    value += 50 * n;

    n = Math.min(Math.ceil(price / 100), counts[2]);
    result[2] += n;
    price -= 100 * n;
    value += 100 * n;

    n = Math.min(Math.ceil(price / 500), counts[3]);
    result[3] += n;
    price -= 500 * n;
    value += 500 * n;

    //お釣りの計算
    back = value - originalPrice;

    n = parseInt(back / 500);
    result[3] -= n;
    back -= n * 500;

    n = parseInt(back / 100);
    result[2] -= n;
    back -= n * 100;

    n = parseInt(back / 50);
    result[1] -= n;
    back -= n * 50;

    n = parseInt(back / 10);
    result[0] -= n;
    back -= n * 10;

    if (result[0] > 0) console.log('10 %d', result[0]);
    if (result[1] > 0) console.log('50 %d', result[1]);
    if (result[2] > 0) console.log('100 %d', result[2]);
    if (result[3] > 0) console.log('500 %d', result[3]);
    console.log('');

    l += 2;
}
