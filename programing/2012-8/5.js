var Parser = require('./Parser.js');

var parser = new Parser();
var tree = parser.parse(
    'SET i 0\n' +
    'SET result 0\n' +
    'ADD i result\n' +
    'SUB 4 0\n' +
    'CMP i 10\n' +
    'JMP -3 0\n' +
    'PRN i result\n' +
    'ADD 2 i\n' +
    'SUB 2 0\n' +
    'BAK 0 0\n' +
    'ADD -1 i\n'+
    'BAK 0 0\n'
);

parser.run(tree);
