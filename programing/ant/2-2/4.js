require('../libs/includes.js');

var N = 6,
    R = 10,
    X = [1, 7, 15, 20, 40, 50];

//ソート
X = X.ascendSort();

var count = 0,
    left, center, right
while (X.length > 0) {
    //最初の点を取り出す
    left = X.shift();

    //そこから距離R以内の最も遠い点を選ぶ
    center = left;
    while (X.length > 0) {
        if (left+R < X[0]) break;
        center = X.shift();
    }
    count++;

    //そこから距離R以内の点は外してよい
    while (X.length > 0) {
        if (center+R < X[0]) break;
        X.shift();
    }
}
console.log(count);
