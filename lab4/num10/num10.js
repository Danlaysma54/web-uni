function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let arr=[]
let res=[]
let count=0
for(let i=0; i<10;i++){
    arr.push(randomInteger(-100,100))
    if(arr[i]<0){
count++
    }
}
console.log(`Массив: ${arr.join()}`)
console.log(`Количество отрицательных: ${count}`)