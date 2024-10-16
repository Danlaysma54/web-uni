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
    arr.push(randomInteger(-100,100))
    if(arr[i] > 0 && arr[i]%2==0){
    res.push(arr[i])
    }
}
console.log(`Массив 1: ${arr.join(' ')}`)
console.log(`Массив 2: ${res.join(' ')}`)