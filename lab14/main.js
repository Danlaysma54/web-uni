function fill() {
    let field = document.getElementById(event.srcElement.id);
    let turn = document.getElementById("nothing");
    let fiels=document.getElementsByClassName("puzzle")
    let wrapper =document.getElementById("wrapper");
    if (turn.dataset.turn == 'один' && field.dataset.logo=='0') {
        field.src = "./resourses/avangard.png"
        field.dataset.logo = 'avangard'
        turn.dataset.turn = 'два'
    }
    if(turn.dataset.turn == 'два' && field.dataset.logo=='0') {
        field.src = "./resourses/sibir.png"
        field.dataset.logo = 'sibir'
        turn.dataset.turn = 'один'
    }
if(isVictory(fiels)){
    let text = document.getElementById('text')
    text.innerText='Победил игрок:'+turn.dataset.turn;
    wrapper.remove();
}
}
function isVictory(elements) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < combs.length; i++) {
        if ((elements[combs[i][0]].dataset.logo == elements[combs[i][1]].dataset.logo) && (elements[combs[i][1]].dataset.logo == elements[combs[i][2]].dataset.logo) && elements[combs[i][1]].dataset.logo!='0' ) {
            return true;
        }
    }
    return false;
}