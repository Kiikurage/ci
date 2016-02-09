var _ = module.exports;

var buffer;

_.init = function() {
    var y;

    buffer = [];

    // Y axis
    for (y = 30; y >= 1; y--) {
        buffer.push(
            (y + ' ').substr(0, 2) +
            '|' +
            '          ' +
            '          ' +
            '          ' +
            '          ' +
            '          ' +
            '          ' + ' '
        );
    }

    // XY axis
    buffer.push(
        '0 ' + '+' +
        '---------+' +
        '---------+' +
        '---------+' +
        '---------+' +
        '---------+' +
        '---------+' + '-'
    );

    // X axis
    buffer.push(
        '  ' + '0' +
        '          ' +
        '         1' +
        '0         ' +
        '         2' +
        '0         ' +
        '         3' + '0'
    );

    return buffer;
};

_.output = function() {
    console.log(buffer.join('\n'));
};

_.plot = function(xy, marker) {
    var x = xy[0],
        y = xy[1],
        row = 30 - Math.floor(y),
        col = Math.floor(x * 2) + 2,
        line = buffer[row];

    marker = marker || '*'

    buffer[row] = line.substr(0, col) +
        marker +
        line.substr(col + 1);
};

_.line = function(a, b, marker) {
    var x, y;
    if (a < 1) {
        for (y = 0; y <= 30; y++) {
            x = (y - b) / a;
            if (x >= 0 && x < 30) {
                _.plot([x, y], marker);
            }
        }
    } else {
        for (x = 0; x <= 30; x++) {
            y = a * x + b;
            if (y >= 0 && y < 30) {
                _.plot([x, y], marker);
            }
        }
    }
};
