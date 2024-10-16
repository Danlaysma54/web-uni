let str: string= 'd023m0df0dfg0'
let firstNumb: number=-1
let lastNumb =-1
let flag =true
var reg = /[0-9]/;
    for(let i=0;i<str.length;i++){
    if(reg.test(str[i])){
        if(flag){
            flag=false
            firstNumb=i+1
        }
        lastNumb=i+1
    }
}
console.log(`Первая цифра в строке ${firstNumb}`)
console.log(`последняя цифра в строке ${lastNumb}`)
export{}