var lines = require('fs').readFileSync('/dev/stdin', 'utf-8')
    .trim().split('\n');

var l = 0;

while (true) {
    var nr = lines[l].split(' '),
        n = parseInt(nr[0]),
        r = parseInt(nr[1]),
        i;
    l++;

    if (n == 0 && r == 0) break;

    var card = [],
        subset;
    for (i = 0; i < n; i++) {
        card[i] = n - i;
    }

    var pc, p, c;
    for (i = 0; i < r; i++) {
        pc = lines[l + i].split(' ');
        p = parseInt(pc[0]);
        c = parseInt(pc[1]);
        subset = card.splice(p-1, c);
        card = subset.concat(card);
    }

    console.log(card[0]);
    l = l + r;
}
