let str1= "Hi"
let str2 = "Bye"
console.log(`${str1} & ${str2}`)
function longerSentence(str1,str2){
   return  (str1.length>str2.length ? str1 : str2)
}
console.log(`Наибольшая строка ${longerSentence(str1,str2)}`)