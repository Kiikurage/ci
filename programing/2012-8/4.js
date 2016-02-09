var Parser = require('./Parser.js');

var parser = new Parser();
var tree = parser.parse(
    'SET hoge 1\n' +
    'SET huga 0\n' +
    'ADD hoge huga\n' +
    'ADD 1 hoge\n' +
    'CMP hoge 10\n' +
    'JMP -3 0\n' +
    'PRN hoge huga\n'
);

parser.run(tree);
