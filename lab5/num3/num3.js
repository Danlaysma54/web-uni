var sentence = "smth special";
console.log("\u0421\u0442\u0440\u043E\u043A\u0430: ".concat(sentence));
console.log("\u0414\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0430: ".concat(sentence.length));
console.log("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0441\u0438\u043C\u0432\u043E\u043B \u0441\u0442\u0440\u043E\u043A\u0430 ".concat(sentence[sentence.length - 1]));
for (var i = sentence.length - 1; i > -1; i--) {
    console.log(sentence[i]);
}
;
