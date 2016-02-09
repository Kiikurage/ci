var DEBUG;

// DEBUG = true;

function Parser() {

}

Parser.prototype.tokenize = function(input) {
    return input.split(/\s/g);
};

Parser.prototype.lex = function(input) {
    return input.reduce(function(res, token, i) {
        if (i % 3 === 0) {
            res.push([token]);
        } else {
            res[res.length - 1].push(token);
        }

        return res;
    }, []);
};

Parser.prototype.parse = function(input) {
    var tokens = this.tokenize(input),
        tree = this.lex(tokens);

    return tree;
};

Parser.prototype.run = function(tree) {
    var heap = {
        _pc: 0,
        _callStack: []
    };

    while (heap._pc < tree.length && heap._pc !== -1) {
        heap = this.runStep(tree, heap);
    }
};

Parser.prototype.runStep = function(tree, heap) {
    var cmd = tree[heap._pc],
        op = cmd[0],
        v1 = Number(cmd[1]),
        v2 = Number(cmd[2]),
        out;

    if (isNaN(v1)) v1 = heap[cmd[1]];
    if (isNaN(v2)) v2 = heap[cmd[2]];

    if (DEBUG) {
        console.log('pc:%d op:%s v1:%d v2:%d', heap._pc, op, v1, v2);
    }
    switch (op) {
        case 'SET':
            heap[cmd[1]] = v2;
            break

        case 'ADD':
            heap[cmd[2]] += v1;
            break

        case 'CMP':
            if (v1 === v2) {
                heap._pc++;
            }
            break

        case 'JMP':
            heap._pc += v1 - 1;
            break

        case 'PRN':
            console.log('%s=%d, %s=%d', cmd[1], v1, cmd[2], v2);
            heap._pc = -2;
            break

        case 'SUB':
            heap._callStack.push(heap._pc);
            heap._pc += v1 - 1;
            break

        case 'BAK':
            heap._pc = heap._callStack.pop();
            break

        case 'CAL':
            heap._.push(heap);
            heap = {
                _pc: heap._pc + v1 - 1,
                in: v2,
            };
            break

        case 'RET':
            heap = heap._callStack.pop();
            heap.out = v1;
            break
    }
    heap._pc++;

    return heap;
};

module.exports = Parser;
