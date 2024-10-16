let arr =["orange", "red", "green", "blue"];
function compare(a,b){
    return a.length-b.length;
}
arr.sort(compare)
console.log(`${arr}`)