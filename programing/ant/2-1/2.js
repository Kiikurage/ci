var N = 10,
    M = 12,
    input =
    'W........WW.' +
    '.WWW.....WWW' +
    '....WW...WW.' +
    '.........WW.' +
    '....WW.WWW..' +
    '..W...W..W..' +
    '.W.W.....WW.' +
    'W.W.W.....W.' +
    '.W.W......W.' +
    '..W.......W.';

function main() {
    var count = 0,
        i;

    var fill = function(x, y) {
        var dx, dy, nx, ny, i;

        i = x+y*M
        input = input.substr(0, i) + '.' + input.substr(i+1);

        for (dx = -1; dx <= 1; dx++) {
            for (dy = -1; dy <= 1; dy++) {
                nx = x + dx;
                ny = y + dy;
                if (0 <= nx && M > nx && 0 <= ny && N > ny && input.charAt(nx+ny*M) === 'W') {
                    fill(nx, ny);
                }
            }
        }
    };

    while ((i = input.search('W')) !== -1) {
        console.log(i);
        fill(i % M, Math.floor(i / M));
        count++;
    }

    console.log(count);
}

main();
