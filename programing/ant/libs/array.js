'use strict'

Array.prototype.ascendSort = function ascendSort() {
    return this.sort(function(a, b){
        return a > b ? 1 : a < b ? -1 : 0;
    });
};

Array.prototype.descendSort = function ascendSort() {
    return this.sort(function(a, b){
        return a < b ? 1 : a > b ? -1 : 0;
    });
};

Array.prototype.binarySearch = function binarySearch(val, from, to){
    if (from === undefined) {
        from = 0;
    }

    if (to === undefined) {
        to = this.length-1;
    }

    var mid = Math.ceil((from+to)/2),
        midVal = this[mid];

    if (midVal === val) {
        return mid

    } else if (midVal > val) {
        return this.binarySearch(val, from, mid-1);

    } else if (midVal < val) {
        return this.binarySearch(val, mid+1, to);
    }
};
