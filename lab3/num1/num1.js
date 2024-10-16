function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let randomNumb=randomInteger(-100,100);
console.log("Само число "+randomNumb )
if(randomNumb<0){
console.log("Число отрицательное")
}else {
    console.log("Число положительное")
}
if(randomNumb%2==0){
    console.log("Число четное")
}else{
    console.log("Число нечетное")
}
