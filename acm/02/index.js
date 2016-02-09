var lines = require('fs').readFileSync('/dev/stdin', 'utf-8')
    .trim().split('\n');

var m = parseInt(lines[0]),
    l = 1; //line number

var startValue, duration, n, maxValue, i,
    tmp, isMulti, rate, fee, j, value, profit;

while (m--) {
    startValue = parseInt(lines[l]);
    duration = parseInt(lines[l+1]);
    n = parseInt(lines[l+2]);
    maxValue = 0;
    i;

    l += 3;
    for (i = 0; i < n; i++) {
        tmp = lines[l+i].split(' ');
        isMulti = parseInt(tmp[0]) === 1;
        rate = parseFloat(tmp[1]);
        fee = parseInt(tmp[2]);
        value = startValue;
        profit = 0;
        for (j = 0; j < duration; j++) {
            if (isMulti) {
                value += parseInt(value*rate);
            } else {
                profit += parseInt(value*rate);
            }

            value -= fee;
        }
        value += profit;
        if (maxValue < value) {
            maxValue = value;
        }
    }
    console.log(maxValue);
    l += n;
}
