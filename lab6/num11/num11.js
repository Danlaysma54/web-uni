"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
var arr = [];
var res = [];
var firstHalf = 0;
var secondHalf = 0;
for (var i = 0; i < 10; i++) {
    arr.push(randomInteger(-100, 100));
    if (arr[i] > 0 && arr[i] % 2 == 0) {
        res.push(arr[i]);
    }
}
console.log("\u041C\u0430\u0441\u0441\u0438\u0432 1: ".concat(arr.join(' ')));
console.log("\u041C\u0430\u0441\u0441\u0438\u0432 2: ".concat(res.join(' ')));
