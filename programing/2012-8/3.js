var Parser = require('./Parser.js');

var parser = new Parser();
var tree = parser.parse(
    'SET x 1\n' +
    'SET y 0\n' +
    'ADD x y\n' +
    'ADD 1 x\n' +
    'CMP x 10\n' +
    'JMP -3 0\n' +
    'PRN x y\n'
);

parser.run(tree);
