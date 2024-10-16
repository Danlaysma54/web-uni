"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function compare(a, b) {
    return b - a;
}
var arr = [];
var res = [];
for (var i = 0; i < 10; i++) {
    arr.push(randomInteger(-100, 100));
}
res = arr.sort(compare);
console.log("\u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 ".concat(arr.join(' ')));
console.log("\u041E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 ".concat(res.join(' ')));
