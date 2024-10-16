function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
var randomNumb = randomInteger(-1000, 1000);
console.log("\u0421\u0430\u043C\u043E \u0447\u0438\u0441\u043B\u043E: ".concat(randomNumb));
var randomNumbStr = String(Math.abs(randomNumb));
console.log("\u041F\u0435\u0440\u0432\u0430\u044F \u0446\u0438\u0444\u0440\u0430 \u0447\u0438\u0441\u043B\u0430: ".concat(randomNumbStr[0]));
console.log("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0446\u0438\u0444\u0440\u0430 \u0447\u0438\u0441\u043B\u0430 ".concat(randomNumbStr[randomNumbStr.length - 1]));
console.log("\u0421\u0443\u043C\u043C\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0446\u0438\u0444\u0435\u0440 \u0447\u0438\u0441\u043B\u0430 ".concat(Number(randomNumbStr[0]) + Number(randomNumbStr[randomNumbStr.length - 1])));
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0446\u0438\u0444\u0440 \u0432 \u0447\u0438\u0441\u043B\u0435: ".concat(randomNumbStr.length));
