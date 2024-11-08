
let number
let numb_arr=[]
function start(){
number = Math.floor(Math.random() * (9999 - 1000) + 1000)
numb_arr= Array.from(number.toString(), Number)
console.log(numb_arr)
}

function input(){
let input_number = document.getElementById("numb").value
let cow = document.getElementById("cow")
let bull = document.getElementById("bull")
console.log(input_number)
let input_numb_arr=Array.from(input_number.toString(), Number)
bull.innerText=0
cow.innerText=0
for (let i=0;i<input_numb_arr.length;i++){
    for (let j=0;j<input_numb_arr.length;j++){
        if(input_numb_arr[i]==numb_arr[j]){
            if(i==j){
                bull.innerText=Number(bull.innerText)+1
            }else{
                cow.innerText=Number(cow.innerText)+1
            }
        }
    }
}
if(Number(bull.innerText)==4){
    let win = document.getElementById("win")
    win.innerText='Победа'
}
}
function rulls(){
    let rulls = document.getElementById('rull')
const para = document.createElement("p");
para.id="smth"
const node = document.createTextNode("В игре принимает участие два человека, каждый из которых в начале игры загадывает 4-х значное число. Цифры в загаданном числе не должны повторяться.Противники по очереди пытаются отгадать число оппонента, задавая вопрос в таком же формате 4-х значного числа.Противник в ответе должен указать количество быков и коров. Бык — это угаданная цифра на правильной позиции, а корова- это правильная цифра , но не на своей позиции.Обмен вопросов — ответов идёт до тех пор, пока кто то первым не разгадает число противника.");
para.appendChild(node);
rulls.appendChild(para)
}