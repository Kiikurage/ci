//@TODO ASCII文字とは

var graph = require('./graph.js');

var a = parseFloat(process.argv[2]),
    b = parseFloat(process.argv[3]);

graph.init();
graph.line(a, b);

graph.output();
