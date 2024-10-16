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
    if (i < 4) {
        firstHalf += arr[i];
    }
    else {
        secondHalf += arr[i];
    }
}
console.log("\u041C\u0430\u0441\u0441\u0438\u0432: ".concat(arr.join()));
console.log("\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0443\u043C\u043C\u043C\u0430: ".concat(firstHalf, " \u0412\u0442\u043E\u0440\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ").concat(secondHalf, " \u0427\u0430\u0441\u0442\u043D\u043E\u0435: ").concat(firstHalf / secondHalf));
