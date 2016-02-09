var fs = require('fs'),
    graph = require('./graph.js');

var input = fs.readFileSync(__dirname + '/data1.txt', 'utf8')
    .split('\n')
    .map(function(line) {
        var ma = line.match(/^\((\d+),\s*(\d+)\)$/),
            x = Number(ma[1]),
            y = Number(ma[2]);

        return [x, y];
    });

graph.init();
input.forEach(function(xy){
    graph.plot(xy);
});
graph.output();
