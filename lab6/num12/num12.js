"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = 'd023m0df0dfg0';
var firstNumb = -1;
var lastNumb = -1;
var flag = true;
var reg = /[0-9]/;
for (var i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
        if (flag) {
            flag = false;
            firstNumb = i + 1;
        }
        lastNumb = i + 1;
    }
}
console.log("\u041F\u0435\u0440\u0432\u0430\u044F \u0446\u0438\u0444\u0440\u0430 \u0432 \u0441\u0442\u0440\u043E\u043A\u0435 ".concat(firstNumb));
console.log("\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0446\u0438\u0444\u0440\u0430 \u0432 \u0441\u0442\u0440\u043E\u043A\u0435 ".concat(lastNumb));
