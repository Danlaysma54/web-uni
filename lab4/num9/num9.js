function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let arr=[]
let res=[]
let firstHalf=0
let secondHalf = 0
for(let i=0; i<10;i++){
    arr.push(randomInteger(0,50))
    if(i<4){
        firstHalf+=arr[i]
    }else{
        secondHalf+=arr[i]
    }
}
console.log(`Массив: ${arr.join()}`)
console.log(`Первая суммма: ${firstHalf} Вторая сумма: ${secondHalf} Частное: ${firstHalf/secondHalf}`)
