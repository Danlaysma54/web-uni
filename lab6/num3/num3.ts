let str :string= "023m0df0dfg0"
function getIndexZeroes(array){
    let arr: number[] = []
    for(let i=0;i<array.length;i++){
    if(array[i]==0){
        arr.push(i)}
    }
    return arr
}
console.log(`Первоначальная строка ${str}`)
console.log(getIndexZeroes(str))
export{}