function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let firstNumb=randomInteger(-100,100)
let secondNumb=randomInteger(-100,100)
function division(firstNumb,secondNumb){
    return firstNumb%secondNumb
}
console.log(`Числа: ${firstNumb} ${secondNumb}`)
console.log(`Остаток от деления: ${division(firstNumb,secondNumb)}`)
console.log(`Сумма чисел ${firstNumb+secondNumb}`)
console.log(`Произведение чисел ${firstNumb*secondNumb}`)