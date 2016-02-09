// 9:16-9:58
var Parser = require('./Parser.js');

var parser = new Parser();
var tree = parser.parse(
    'SET x 1\n' +
    'SET y -2\n' +
    'ADD x y\n' +
    'PRN x y\n'
);

tree.map(function(item){
    console.log(item[1]);
});
