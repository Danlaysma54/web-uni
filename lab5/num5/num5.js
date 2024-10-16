function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function areFirstDigitsEquals(firstNumb, secondNumb) {
    return firstNumb[0] == secondNumb[0] ? true : false;
}
function isFirstDevideBySecond(firstNumb, secondNumb) {
    return firstNumb % secondNumb == 0 ? true : false;
}
function whichIsBigger(firstNumb, secondNumb) {
    return firstNumb > secondNumb ? firstNumb : secondNumb;
}
var firstNumb = randomInteger(-100, 100);
var secondNumb = randomInteger(-100, 100);
console.log("\u0427\u0438\u0441\u043B\u0430: ".concat(firstNumb, " ").concat(secondNumb));
console.log("\u041F\u0435\u0440\u0432\u044B\u0435 \u0446\u0438\u0444\u0440\u044B \u0447\u0438\u0441\u0435\u043B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442 ".concat(areFirstDigitsEquals(String(Math.abs(firstNumb)), String(Math.abs(secondNumb)))));
console.log("\u041F\u0435\u0440\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u0435 \u043D\u0430\u0446\u0435\u043B\u043E ".concat(isFirstDevideBySecond(firstNumb, secondNumb)));
console.log("\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(whichIsBigger(firstNumb, secondNumb)));
