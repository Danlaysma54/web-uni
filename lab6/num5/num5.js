"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
function mergeArrays(arr1, arr2) {
    var res = [];
    for (var i = 0; i < arr1.length; i++) {
        res.push(arr1[i]);
        res.push(arr2[i]);
    }
    return res;
}
console.log("\u041F\u0435\u0440\u0432\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 ".concat(arr1.join(' ')));
console.log("\u0412\u0442\u043E\u0440\u043E\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 ".concat(arr2.join(' ')));
console.log("\u0421\u043B\u0438\u044F\u043D\u0438\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 ".concat(mergeArrays(arr1, arr2).join(' ')));
