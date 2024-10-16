function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let randomNumb= randomInteger(-1000,1000)
randomNumb =  String(randomNumb);
console.log(`Само число: ${randomNumb}`)
randomNumb= String(Math.abs(randomNumb))
console.log(`Первая цифра числа: ${randomNumb[0]}`)
console.log(`Последняя цифра числа ${randomNumb[randomNumb.length-1]}`)
console.log(`Сумма первой и последней цифер числа ${Number(randomNumb[0])+Number(randomNumb[randomNumb.length-1])}`)
console.log(`Количество цифр в числе: ${randomNumb.length}`)