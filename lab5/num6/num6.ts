function randomInteger(min:number, max:number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function division(firstNumb,secondNumb){
    return firstNumb%secondNumb
}
let firstNumb: number=randomInteger(-100,100)
let secondNumb: number=randomInteger(-100,100)

console.log(`Числа: ${firstNumb} ${secondNumb}`)
console.log(`Остаток от деления: ${division(firstNumb,secondNumb)}`)
console.log(`Разность чисел ${firstNumb-secondNumb}`)
console.log(`Частное чисел ${firstNumb/secondNumb}`)
export {}