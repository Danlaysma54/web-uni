let arr1=[1,2,3]
let arr2 =['a','b','c']
function mergeArrays(arr1,arr2){
    let res=[]
    for(let i=0;i<arr1.length;i++){
        res.push(arr1[i]);
        res.push(arr2[i]);
    }
    return res;
}
console.log("cnrh" +arr1)
console.log({arr2})
console.log(mergeArrays(arr1,arr2))

