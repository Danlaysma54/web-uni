function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let arr=[]
let res=[]
for(let i=0; i<10;i++){
    arr.push(randomInteger(-1000000000,1000000000000))
}
arr.forEach(element => {
   if(String(element).includes('11')){
    res.push(element);
   } 
});
console.log(arr)
console.log(res)