var str1 = "Hi";
var str2 = "Bye";
console.log("".concat(str1, " & ").concat(str2));
function longerSentence(str1, str2) {
    return (str1.length > str2.length ? str1 : str2);
}
console.log("\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 ".concat(longerSentence(str1, str2)));
