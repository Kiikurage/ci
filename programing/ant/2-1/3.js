var N = 10,
    M = 10,
    input =
    '#S######.#' +
    '......#..#' +
    '.#.##.##.#' +
    '.#........' +
    '##.##.####' +
    '....#....#' +
    '.#######.#' +
    '....#.....' +
    '.####.###.' +
    '....#...G#';

function main() {
    var count = 0,
        max = N * M,
        memo = [],
        list = [],
        i, j;

    for (i = 0; i < N * M; i++) memo[i] = false;

    var check = function check(list, n) {
        var next = [];

        for (i = 0; i < list.length; i++) {
            j = list[i];
            if (j < 0 || j >= max || memo[j] || input.charAt(j) === '#') continue;
            if (input.charAt(j) === 'G') return n;
            memo[j] = true;

            next.push(j + 1);
            next.push(j - 1);
            next.push(j + N);
            next.push(j - N);
        }

        if (next.length === 0) {
            return -1;
        }
        return check(next, n + 1);
    };

    var start;

    for (i = 0; i < max; i++) {
        if (input.charAt(i) === 'S') {
            start = [i];
            break;
        }
    }

    console.log(check(start, 1));
}

main();
