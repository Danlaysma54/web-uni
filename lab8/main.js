let numb=0;
const arr=[90,180,270]
function rotate(){ 
   if(!document.getElementById('wrapper').classList.contains('end') && !document.getElementById(event.srcElement.id).classList.contains('true')){  
let smth = document.getElementById(event.srcElement.id);
let numb = Number(smth.dataset.angle);
numb+=90;
smth.dataset.angle=numb;
smth.style.transform='rotate('+smth.dataset.angle+'deg)'
if(numb%360==0){
   smth.classList.add("true")
}
}
isWin()
   }
function isWin(){
   let smth=document.getElementsByClassName("true");
   if(smth.length==9){
document.getElementById('wrapper').classList.add('end')
document.getElementById('text').innerText='Победа!'
document.getElementById('button').innerText='Начать заново'
   }
}
function startGame(){
   let smth = document.getElementsByClassName("puzzle");
   for(let i=0;i<smth.length;i++){
      smth[i].dataset.angle=arr[Math.floor(Math.random()*3)];
      smth[i].style.transform='rotate('+smth[i].dataset.angle+'deg)'
      smth[i].classList.remove('true')
   }
   document.getElementById('wrapper').classList.remove('end')
   document.getElementById('text').innerText=''
}