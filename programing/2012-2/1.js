var fs = require('fs');

var input = fs.readFileSync(__dirname + '/data1.txt', 'utf8')
    .split('\n')
    .map(function(line) {
        var ma = line.match(/^\((\d+),\s*(\d+)\)$/),
            x = Number(ma[1]),
            y = Number(ma[2]);

        return [x, y];
    });

var max = input.reduce(function(max, xy){
    if (max[1] <= xy[1]) {
        max = xy;
    }

    return max;
});

console.log(max);
