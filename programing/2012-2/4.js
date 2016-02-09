var fs = require('fs'),
    graph = require('./graph.js');

var data = fs.readFileSync(__dirname + '/data2.txt', 'utf8')
    .split('\n')
    .map(function(line) {
        var ma = line.match(/^\((\d+),\s*(\d+)\)$/),
            x = Number(ma[1]),
            y = Number(ma[2]);

        return [x, y];
    });

var sum = data.reduce(function(sum, xy){
    sum[0] += xy[0];
    sum[1] += xy[1];
    sum[2] += xy[0]*xy[0];
    sum[3] += xy[0]*xy[1];
    sum[4] += xy[1]*xy[1];
    return sum;
}, [0, 0, 0, 0, 0]); // x, y, x2, xy, y2

var N=data.length;

var a = (N*sum[3]-sum[0]*sum[1])/(N*sum[2]-sum[0]*sum[0]),
    b = (sum[2]*sum[1]-sum[3]*sum[0])/(N*sum[2]-sum[0]*sum[0]);

graph.init();
data.forEach(function(xy){
    graph.plot(xy, '*');
});
graph.line(a, b, '○');
graph.output();
