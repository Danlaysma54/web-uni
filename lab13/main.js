let question_numb=1;
const question1= {
    "question": "1+3=",
    "answers":
    [
        {
            "answer":"4",
            "isTrue":"true"

        },
        {
            "answer":"3",
            "isTrue":"false"
        },
        {
            "answer":"5",
            "isTrue":"false"
        },
        {
            "answer":"6",
            "isTrue":"false"
        }

    ]

}
const question2 = {
    "question": "2+4=",
    "answers":
    [
        {
            "answer":"4",
            "isTrue":"false"

        },
        {
            "answer":"3",
            "isTrue":"false"
        },
        {
            "answer":"5",
            "isTrue":"false"
        },
        {
            "answer":"6",
            "isTrue":"true"
        }

    ]

}

const question3 ={
    "question": "5-3=",
    "answers":
    [
        {
            "answer":"4",
            "isTrue":"false"

        },
        {
            "answer":"3",
            "isTrue":"false"
        },
        {
            "answer":"2",
            "isTrue":"true"
        },
        {
            "answer":"6",
            "isTrue":"false"
        }

    ]

}

const question4= {
    "question": "1-3=",
    "answers":
    [
        {
            "answer":"4",
            "isTrue":"false"

        },
        {
            "answer":"-2",
            "isTrue":"true"
        },
        {
            "answer":"5",
            "isTrue":"false"
        },
        {
            "answer":"6",
            "isTrue":"false"
        }

    ]

}

const question5 = {
    "question": "6+7=",
    "answers":
    [
        {
            "answer":"14",
            "isTrue":"false"

        },
        {
            "answer":"13",
            "isTrue":"true"
        },
        {
            "answer":"12",
            "isTrue":"false"
        },
        {
            "answer":"16",
            "isTrue":"false"
        }

    ]

}
const question6 = {
    "question": "123+12=",
    "answers":
    [
        {
            "answer":"135",
            "isTrue":"true"

        },
        {
            "answer":"113",
            "isTrue":"false"
        },
        {
            "answer":"125",
            "isTrue":"false"
        },
        {
            "answer":"166",
            "isTrue":"false"
        }

    ]

}

const question7 = {
    "question": "1+9=",
    "answers":
    [
        {
            "answer":"4",
            "isTrue":"false"

        },
        {
            "answer":"3",
            "isTrue":"false"
        },
        {
            "answer":"5",
            "isTrue":"false"
        },
        {
            "answer":"10",
            "isTrue":"true"
        }

    ]

}

const question8 = {
    "question": "12+1=",
    "answers":
    [
        {
            "answer":"13",
            "isTrue":"true"

        },
        {
            "answer":"19",
            "isTrue":"false"
        },
        {
            "answer":"18",
            "isTrue":"false"
        },
        {
            "answer":"16",
            "isTrue":"false"
        }

    ]

}
const question9 = {
    "question": "1+1=",
    "answers":
    [
        {
            "answer":"2",
            "isTrue":"true"

        },
        {
            "answer":"19",
            "isTrue":"false"
        },
        {
            "answer":"18",
            "isTrue":"false"
        },
        {
            "answer":"16",
            "isTrue":"false"
        }

    ]

}
const question10 = {
    "question": "12+11=",
    "answers":
    [
        {
            "answer":"33",
            "isTrue":"true"

        },
        {
            "answer":"19",
            "isTrue":"false"
        },
        {
            "answer":"18",
            "isTrue":"false"
        },
        {
            "answer":"16",
            "isTrue":"false"
        }

    ]

}
function nextQuestion(){
    let question = document.getElementById('question');
    let answer_1=document.getElementById('answer_1');
    let answer_2=document.getElementById('answer_2');
    let answer_3=document.getElementById('answer_3');
    let answer_4=document.getElementById('answer_4');
    let result=document.getElementById('res');
    switch(question_numb){
        case 2:
            question.innerText=question2.question;
            answer_1.innerText=question2.answers[0].answer;
            answer_2.innerText=question2.answers[1].answer;
            answer_3.innerText=question2.answers[2].answer;
            answer_4.innerText=question2.answers[3].answer;
            answer_1.dataset.is_true=question2.answers[0].isTrue;
            answer_2.dataset.is_true=question2.answers[1].isTrue;
            answer_3.dataset.is_true=question2.answers[2].isTrue;
            answer_4.dataset.is_true=question2.answers[3].isTrue;
            break;
    case 3:
            question.innerText=question3.question;
            answer_1.innerText=question3.answers[0].answer;
            answer_2.innerText=question3.answers[1].answer;
            answer_3.innerText=question3.answers[2].answer;
            answer_4.innerText=question3.answers[3].answer;
            answer_1.dataset.is_true=question3.answers[0].isTrue;
            answer_2.dataset.is_true=question3.answers[1].isTrue;
            answer_3.dataset.is_true=question3.answers[2].isTrue;
            answer_4.dataset.is_true=question3.answers[3].isTrue;
            break;
    case 4:
            question.innerText=question4.question;
            answer_1.innerText=question4.answers[0].answer;
            answer_2.innerText=question4.answers[1].answer;
            answer_3.innerText=question4.answers[2].answer;
            answer_4.innerText=question4.answers[3].answer;
            answer_1.dataset.is_true=question4.answers[0].isTrue;
            answer_2.dataset.is_true=question4.answers[1].isTrue;
            answer_3.dataset.is_true=question4.answers[2].isTrue;
            answer_4.dataset.is_true=question4.answers[3].isTrue;
            break;
    case 5:
            answer_1.innerText=question5.answers[0].answer;
            question.innerText=question5.question;
            answer_2.innerText=question5.answers[1].answer;
            answer_3.innerText=question5.answers[2].answer;
            answer_4.innerText=question5.answers[3].answer;
            answer_1.dataset.is_true=question5.answers[0].isTrue;
            answer_2.dataset.is_true=question5.answers[1].isTrue;
            answer_3.dataset.is_true=question5.answers[2].isTrue;
            answer_4.dataset.is_true=question5.answers[3].isTrue;
            break;
    case 6:
            question.innerText=question6.question;
            answer_1.innerText=question6.answers[0].answer;
            answer_2.innerText=question6.answers[1].answer;
            answer_3.innerText=question6.answers[2].answer;
            answer_4.innerText=question6.answers[3].answer;
            answer_1.dataset.is_true=question6.answers[0].isTrue;
            answer_2.dataset.is_true=question6.answers[1].isTrue;
            answer_3.dataset.is_true=question6.answers[2].isTrue;
            answer_4.dataset.is_true=question6.answers[3].isTrue;
            break;
    case 7:
            question.innerText=question7.question;
            answer_1.innerText=question7.answers[0].answer;
            answer_2.innerText=question7.answers[1].answer;
            answer_3.innerText=question7.answers[2].answer;
            answer_4.innerText=question7.answers[3].answer;
            answer_1.dataset.is_true=question7.answers[0].isTrue;
            answer_2.dataset.is_true=question7.answers[1].isTrue;
            answer_3.dataset.is_true=question7.answers[2].isTrue;
            answer_4.dataset.is_true=question7.answers[3].isTrue;
            break;
    case 8:
            question.innerText=question8.question;
            answer_1.innerText=question8.answers[0].answer;
            answer_2.innerText=question8.answers[1].answer;
            answer_3.innerText=question8.answers[2].answer;
            answer_4.innerText=question8.answers[3].answer;
            answer_1.dataset.is_true=question8.answers[0].isTrue;
            answer_2.dataset.is_true=question8.answers[1].isTrue;
            answer_3.dataset.is_true=question8.answers[2].isTrue;
            answer_4.dataset.is_true=question8.answers[3].isTrue;
            break;
    case 9:
            question.innerText=question9.question;
            answer_1.innerText=question9.answers[0].answer;
            answer_2.innerText=question9.answers[1].answer;
            answer_3.innerText=question9.answers[2].answer;
            answer_4.innerText=question9.answers[3].answer;
            answer_1.dataset.is_true=question9.answers[0].isTrue;
            answer_2.dataset.is_true=question9.answers[1].isTrue;
            answer_3.dataset.is_true=question9.answers[2].isTrue;
            answer_4.dataset.is_true=question9.answers[3].isTrue;
            break;
    case 10: 
            question.innerText=question10.question;
            answer_1.innerText=question10.answers[0].answer;
            answer_2.innerText=question10.answers[1].answer;
            answer_3.innerText=question10.answers[2].answer;
            answer_4.innerText=question10.answers[3].answer;
            answer_1.dataset.is_true=question10.answers[0].isTrue;
            answer_2.dataset.is_true=question10.answers[1].isTrue;
            answer_3.dataset.is_true=question10.answers[2].isTrue;
            answer_4.dataset.is_true=question10.answers[3].isTrue;
            break;
    case 11:
            let res = document.getElementById('res')
            result.innerText='right answers: '+res.dataset.answer;
            question.innerText="";
            answer_1.innerText="";
            answer_2.innerText="";
            answer_3.innerText="";
            answer_4.innerText="";
            break;
}
}
function start(){
    let question = document.getElementById('question');
    let answer_1=document.getElementById('answer_1');
    let answer_2=document.getElementById('answer_2');
    let answer_3=document.getElementById('answer_3');
    let answer_4=document.getElementById('answer_4');
    question.innerText=question1.question;
    console.log(question.innerText)
    answer_1.innerText=question1.answers[0].answer;
    answer_2.innerText=question1.answers[1].answer;
    answer_3.innerText=question1.answers[2].answer;
    answer_4.innerText=question1.answers[3].answer;
    answer_1.dataset.is_true=question1.answers[0].isTrue;
    answer_2.dataset.is_true=question1.answers[1].isTrue;
    answer_3.dataset.is_true=question1.answers[2].isTrue;
    answer_4.dataset.is_true=question1.answers[3].isTrue;
    event.srcElement.remove()
}

function isTrue(){
    let answer = document.getElementById(event.srcElement.id);
    console.log(answer)
    let res = document.getElementById('res')
    console.log(answer.dataset.is_true);
    if (answer.dataset.is_true=='true'){
        res.dataset.answer= Number(res.dataset.answer)+1;
        console.log(res.dataset.answer);
    }
    question_numb++;
    nextQuestion();
}
