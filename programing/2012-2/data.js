var x, y, res, i;

res = [];
i = 30;
while (i--) {
    x = Math.floor(Math.random() * 30);
    y = Math.floor(x * 0.5 + 10 + Math.random() * 4) - 2;
    if (y >= 0 && y < 30) {
        res.push([x, y]);
    }
}

res = res
    .map(function(xy) {
        return '(' + xy[0] + ', ' + xy[1] + ')'
    })
    .join('\n');

require('fs').writeFileSync(__dirname + '/data2.txt', res, 'utf8');
