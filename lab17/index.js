let arr=["Да","Абсолютно точно","Не могу сказать","Нет","Безусловно","Похоже, что да","Без сомнений","Должно быть так","Мало шансов","Ответ не ясен","Спросите позже","Очень вероятно","Мне кажется да"]
function changeText(){
    let text = document.getElementById("text");
text.innerText=arr[Math.floor(Math.random()*arr.length)]
}