let sentence = "smth special"
console.log(`Строка: ${sentence}`)
console.log(`Длина строка: ${sentence.length}`)
console.log(`Последний символ строка ${sentence[sentence.length-1]}`)
for(let i=sentence.length-1;i>-1;i--){
    console.log(sentence[i])
};