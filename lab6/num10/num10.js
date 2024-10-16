"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
var arr = [];
var res = [];
var count = 0;
for (var i = 0; i < 10; i++) {
    arr.push(randomInteger(-100, 100));
    if (arr[i] < 0) {
        count++;
    }
}
console.log("\u041C\u0430\u0441\u0441\u0438\u0432: ".concat(arr.join()));
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445: ".concat(count));
