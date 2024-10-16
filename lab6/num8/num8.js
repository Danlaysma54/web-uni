"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = ["orange", "red", "green", "blue"];
function compare(a, b) {
    return a.length - b.length;
}
arr.sort(compare);
console.log("".concat(arr));
