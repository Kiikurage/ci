//Best Cow Line

var S = 'BABB',
    T = '';

var i;
while (S.length !== 0) {
    var s = ''

    //良い例。
    // => BABB
    for (i = 0; i < S.length; i++) {
        if (S.charCodeAt(i) < S.charCodeAt(S.length - 1 - i)) {
            s = S.charAt(0);
            S = S.substr(1);
            break;
        } else if (S.charCodeAt(i) > S.charCodeAt(S.length - 1 - i)) {
            s = S.charAt(S.length - 1);
            S = S.substr(0, S.length - 1);
            break;
        }
    }
    if (s === '') {
        s = S.charAt(0);
        S = S.substr(1);
    }

    //悪い例。
    // => BBAB
    //同じ文字の場合には、2文字目以降を比較する必要がある
    // if (S.charCodeAt(0) < S.charCodeAt(S.length-1)) {
    //     s = S.charAt(0);
    //     S = S.substr(1);
    // } else {
    //     s = S.charAt(S.length-1);
    //     S = S.substr(0, S.length-1);
    // }

    T += s;
}

console.log(T);
