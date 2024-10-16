function randomInteger(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function areFirstDigitsEquals(firstNumb,secondNumb){
    return firstNumb[0]==secondNumb[0] ? true : false
}
function isFirstDevideBySecond(firstNumb,secondNumb){
    return firstNumb%secondNumb==0 ? true : false
}
function whichIsBigger(firstNumb,secondNumb){
return firstNumb>secondNumb ? firstNumb:secondNumb
}
let firstNumb = randomInteger(-100,100)
let secondNumb = randomInteger(-100,100)
console.log(`Числа: ${firstNumb} ${secondNumb}`)
console.log(`Первые цифры чисел совпадают ${areFirstDigitsEquals(String(Math.abs(firstNumb)),String(Math.abs(secondNumb)))}`)
console.log(`Первое число делиться на второе нацело ${isFirstDevideBySecond(firstNumb,secondNumb)}`)
console.log(`Наибольшее число ${whichIsBigger(firstNumb,secondNumb)}`)
export{}
