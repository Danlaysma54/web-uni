"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = "023m0df0dfg0";
function getIndexZeroes(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log("\u041F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 ".concat(str));
console.log(getIndexZeroes(str));
