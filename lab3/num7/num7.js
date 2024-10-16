function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let firstNumb=randomInteger(-50,50)
let secondNumb=randomInteger(-50,50)
let thirdNumb =randomInteger(-50,50)
function mean(firstNumb,secondNumb,thirndNumb){
    return (firstNumb+secondNumb+thirndNumb)/3
}
function pow2(firstNumb,secondNumb,thirdNumb){
    return Math.pow(firstNumb,2)+Math.pow(secondNumb,2)+Math.pow(thirdNumb,2)
}
function higher(firstNumb,secondNumb,thirdNumb){
    return Math.max(firstNumb,secondNumb,thirdNumb);

}
function lower(firstNumb,secondNumb,thirdNumb){
    return Math.min(firstNumb,secondNumb,thirdNumb);
}
console.log(`Сами числа ${firstNumb} ${secondNumb} ${thirdNumb}`)
console.log(`Среднее арифмитическое ${mean(firstNumb,secondNumb,thirdNumb)}`)
console.log(`Сумма квадратов ${pow2(firstNumb,secondNumb,thirdNumb)}`)
console.log(`Наибольшее число ${higher(firstNumb,secondNumb,thirdNumb)}`)
console.log(`Наименьшее число ${lower(firstNumb,secondNumb,thirdNumb)}`)


