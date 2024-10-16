function randomInteger(min : number, max : number) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let arr : number[]=[]
let res : number[]=[]
let firstHalf=0
let secondHalf = 0
for(let i=0; i<10;i++){
    arr.push(randomInteger(-100,100))
    if(i<4){
        firstHalf+=arr[i]
    }else{
        secondHalf+=arr[i]
    }
}
console.log(`Массив: ${arr.join()}`)
console.log(`Первая суммма: ${firstHalf} Вторая сумма: ${secondHalf} Частное: ${firstHalf/secondHalf}`)
export{}