var Solver = require('./Solver.js'),
    solver = new Solver();

// solver.readText('!a&b&(c+a)&!d');
solver.readText(process.argv[2]);
console.log(solver.parse());
