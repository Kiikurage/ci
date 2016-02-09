require('../libs/includes.js');

var n = 5,
    s = [1, 2, 4, 6, 8],
    t = [3, 5, 7, 9, 10];

//終了時間でソート
var tasks = s.map(function(s, i){
        return {
            s: s,
            t: t[i]
        }
    })
    .sort(function(a, b) {
        return a.t > b.t ? 1 : a.b < b.t ? -1 : 0;
    });

//カウント
var count = 0;
while (true) {
    if (tasks.length === 0) break;
    //終了時間が最も早いタスク
    s = tasks[0].s;
    t = tasks[0].t;
    count++;

    //参加不能なタスクを取り除く
    while (tasks[0].s < t) {
        tasks.shift();
        if (tasks.length === 0) break;
    }
}

console.log(count);
