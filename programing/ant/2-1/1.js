require('../libs/includes.js');

var n = 4,
    a = [1, 2, 4, 7],
    k = 15;

function main(){
    var check = function(sum, i) {
        var v;

        if (i >= a.length) {
            return false;
        }

        v = a[i];

        if (sum+v === k) {
            return true
        } else if (sum+v < k) {
            return check(sum+v, i+1) || check(sum, i+1);
        } else if (sum+v > k) {
            return false;
        }
    }

    console.log(check(0, 0) ? 'YES' : 'NO');
}

main();
