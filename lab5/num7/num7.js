"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
var firstNumb = randomInteger(-50, 50);
var secondNumb = randomInteger(-50, 50);
var thirdNumb = randomInteger(-50, 50);
function mean(firstNumb, secondNumb, thirndNumb) {
    return (firstNumb + secondNumb + thirndNumb) / 3;
}
function pow2(firstNumb, secondNumb, thirdNumb) {
    return Math.pow(firstNumb, 2) + Math.pow(secondNumb, 2) + Math.pow(thirdNumb, 2);
}
function higher(firstNumb, secondNumb, thirdNumb) {
    return Math.max(firstNumb, secondNumb, thirdNumb);
}
function lower(firstNumb, secondNumb, thirdNumb) {
    return Math.min(firstNumb, secondNumb, thirdNumb);
}
console.log("\u0421\u0430\u043C\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(firstNumb, " ").concat(secondNumb, " ").concat(thirdNumb));
console.log("\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0430\u0440\u0438\u0444\u043C\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 ".concat(mean(firstNumb, secondNumb, thirdNumb)));
console.log("\u0421\u0443\u043C\u043C\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043E\u0432 ".concat(pow2(firstNumb, secondNumb, thirdNumb)));
console.log("\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(higher(firstNumb, secondNumb, thirdNumb)));
console.log("\u041D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(lower(firstNumb, secondNumb, thirdNumb)));
