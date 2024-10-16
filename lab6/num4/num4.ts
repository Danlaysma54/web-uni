function randomInteger(min: number, max: number) : number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let arr : number[]=[]
let res: number[]=[]
for(let i=0; i<10;i++){
    
    arr.push(randomInteger(-100,100))
}
arr.forEach(element => {
   if(String(element).includes('5')){
    res.push(element);
   } 
});
console.log(arr)
console.log(res)
export{}