var charMap = {
    '1': '.,!? ',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7':'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};

var lines = require('fs').readFileSync('/dev/stdin', 'utf-8')
    .trim().split('\n');

var n = parseInt(lines[0]),
    l = 1,
    i;

var tokens,
    output;

for (i = 0; i < n; i++) {
    output = lines[l+i].split('0')
        .reduce(function(output, token){
            if (token === '') return output;
            var k = token.charAt(0),
                chars = charMap[k],
                maxCount = chars.length,
                count = token.length;

            while (count > maxCount) count -= maxCount;

            return output+chars[count-1];
        }, '');

    console.log(output);
}
