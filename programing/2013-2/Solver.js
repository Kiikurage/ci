var AND = '&',
    OR = '+';

var DEBUG = Boolean(process.env.DEBUG);

function Solver() {
    this.input = '';
    this.tokens = '';
};

Solver.prototype.grammers = [{
    name: 'OR',
    pattern: ['@VAL', '+', '@VAL'],
    action: function(tokens) {
        return {
            type: 'VAL',
            value: tokens[0].value || tokens[2].value
        }
    }
}, {
    name: 'AND',
    pattern: ['@VAL', '&', '@VAL'],
    action: function(tokens) {
        return {
            type: 'VAL',
            value: tokens[0].value && tokens[2].value
        }
    }
}, {
    name: 'NOT',
    pattern: ['!', '@VAL'],
    action: function(tokens) {
        return {
            type: 'VAL',
            value: !tokens[1].value
        }
    }
}, {
    name: 'VAL',
    pattern: [/^[a-z]$/],
    action: function(tokens) {
        return {
            type: 'VAL',
            value: true //this.loadInptuValue(tokens[0].value)
        };
    }
}, {
    name: 'TEXT',
    pattern: [/^.{2,}$/],
    action: function(tokens) {
        return tokens[0].value.split('')
            .map(function(c) {
                return {
                    type: 'TEXT',
                    value: c
                }
            });
    }
}, {
    name: 'PAREN',
    pattern: [/\([^\)]+\)/],
    action: function(tokens) {
        var solver = new Solver(),
            ma = tokens[0].value.match(/\(([^\)]+)\)/),
            res;

        solver.readText(ma[1]);
        solver.parse();
        res = solver.tokens;

        if (ma.index !== 0) {
            res.unshift({
                type: 'TEXT',
                value: tokens[0].value.substr(0, ma.index)
            });
        }
        if (ma.index+ma[0].length !== tokens[0].value.length - 1) {
            res.push({
                type: 'TEXT',
                value: tokens[0].value.substr(ma.index + ma[0].length)
            });
        }
        return res;
    }
}];

Solver.prototype.read = function() {
    this.input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
    this.tokenize();
};

Solver.prototype.readText = function(text) {
    this.input = text;
    this.tokenize();
};

Solver.prototype.tokenize = function() {
    this.tokens = [{
        type: 'TEXT',
        value: this.input
    }];
};

Solver.prototype.parse = function() {
    var grammers = this.grammers,
        i;

    if (DEBUG) console.log(this.print());
    while (true) {
        matchingFlag = false;

        for (i = grammers.length - 1; i >= 0; i--) {
            while (true) {
                var match = this.match(grammers[i]);

                if (!match.match) break;
                matchingFlag = true;
                if (DEBUG) console.log('grammer: %s', grammers[i].name);

                var newTokens = grammers[i].action.call(this, match.tokens);
                if (!(newTokens instanceof Array)) {
                    newTokens = [newTokens];
                }
                this.tokens.splice.apply(this.tokens, [match.from, match.length].concat(newTokens));

                if (DEBUG) console.log(this.print());
            }
        }

        if (!matchingFlag) break;
    }

    return this.tokens;
};

Solver.prototype.print = function() {
    return this.tokens.map(function(token) {
            return token.type + ':' + token.value;
        })
        .join(', ');
};

Solver.prototype.match = function(grammer) {
    var from = 0,
        length = 0,
        pCursor = 0,
        tokens = this.tokens,
        token, pattern,
        buffer = [];

    while (from + length < tokens.length) {
        token = tokens[from + length];
        pattern = grammer.pattern[pCursor];

        if (pattern instanceof RegExp) {
            //handle Type matching
            if (token.type === 'TEXT' &&
                pattern.test(token.value)) {
                length++;
                pCursor++;
                buffer.push(token);
            } else {
                from = from + length + 1;
                length = 0;
                pCursor = 0;
                buffer = [];
            }

        } else if (pattern.charAt(0) === '@') {
            //handle RegExp maching
            if ('@' + token.type === pattern) {
                length++;
                pCursor++;
                buffer.push(token);
            } else {
                from = from + length + 1;
                length = 0;
                pCursor = 0;
                buffer = [];
            }

        } else {
            //handle text maching
            if (token.type === 'TEXT' &&
                token.value === pattern) {
                length++;
                pCursor++;
                buffer.push(token);
            } else {
                from = from + length + 1;
                length = 0;
                pCursor = 0;
                buffer = [];
            }
        }

        if (pCursor >= grammer.pattern.length) {
            return {
                match: true,
                from: from,
                length: length,
                tokens: buffer
            };
        }
    }

    return {
        match: false
    };
};

module.exports = Solver;
