"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
var arr = [];
var res = [];
for (var i = 0; i < 10; i++) {
    arr.push(randomInteger(-100, 100));
}
arr.forEach(function (element) {
    if (String(element).includes('5')) {
        res.push(element);
    }
});
console.log(arr);
console.log(res);
