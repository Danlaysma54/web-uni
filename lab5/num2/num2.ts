function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let randomNumb= randomInteger(-1000,1000)
console.log(`Само число: ${randomNumb}`)
let randomNumbStr : string= String(Math.abs(randomNumb))
console.log(`Первая цифра числа: ${randomNumbStr[0]}`)
console.log(`Последняя цифра числа ${randomNumbStr[randomNumbStr.length-1]}`)
console.log(`Сумма первой и последней цифер числа ${Number(randomNumbStr[0])+Number(randomNumbStr[randomNumbStr.length-1])}`)
console.log(`Количество цифр в числе: ${randomNumbStr.length}`)