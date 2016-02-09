var L = 10,
    n = 3,
    x = [2, 6, 7];
//// >> min = 4
//// >> max = 8

function main() {
    var max = 0,
        min = 0,
        i;

    for (i = 0; i < n; i++) {
        min = Math.max(min, Math.min(x[i], L - x[i]));
        max = Math.max(max, Math.max(x[i], L - x[i]));
    }

    console.log('min = %d', min);
    console.log('max = %d', max);
}

main();
