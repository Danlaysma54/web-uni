function randomInteger(min: number, max: number): number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function compare(a,b){
    return b-a;
}
let arr : number[]=[]
let res : number[]=[]
for(let i=0; i<10;i++){
    arr.push(randomInteger(-100,100))
}
res=arr.sort(compare)
console.log(`Изначальный массив ${arr.join(' ')}`)
console.log(`Отсортированный массив ${res.join(' ')}`)
export{}