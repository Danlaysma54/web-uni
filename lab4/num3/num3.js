let str= '023m0df0dfg0'
function getIndexZeroes(array){
    let arr = []
    for(let i=0;i<array.length;i++){
    if(array[i]==0){
        arr.push(i)}
    }
    return arr
}
console.log(`Первоначальная строка ${str}`)
console.log(`Индексы нулей в строке ${getIndexZeroes(str).join(' ')}`)