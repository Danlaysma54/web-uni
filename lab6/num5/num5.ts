let arr1: number[]=[1,2,3]
let arr2: string[] =['a','b','c']
function mergeArrays(arr1,arr2){
    let res : any[]=[]
    for(let i=0;i<arr1.length;i++){
        res.push(arr1[i]);
        res.push(arr2[i]);
    }
    return res;
}
console.log(`Первый массив ${arr1.join(' ')}`)
console.log(`Второй массив ${arr2.join(' ')}`)
console.log(`Слияние массивов ${mergeArrays(arr1,arr2).join(' ')}`)
export{}

