// var n = 5,
//     a = [2, 3, 4, 5, 10];
//// >> 12

var n = 4,
    a = [4, 5, 10, 20];
//// >> 0

function main() {
    var max = 0,
        i, j, k;

    a = a.sort(function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
    });

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            for (k = j + 1; k < n; k++) {
                if (a[i] + a[j] > a[k] && a[i] + a[j] + a[k] > max) {
                    max = a[i] + a[j] + a[k];
                    console.log('// %d,%d,%d => %d', a[i], a[j], a[k], max);
                }
            }
        }
    }

    console.log(max);
}

main();
