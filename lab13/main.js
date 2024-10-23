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
            "answer":"23",
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
let questions = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]
function nextQuestion(){
    let question = document.getElementById('question');
    let answer_1=document.getElementById('answer_1');
    let answer_2=document.getElementById('answer_2');
    let answer_3=document.getElementById('answer_3');
    let answer_4=document.getElementById('answer_4');
    let result=document.getElementById('res');
    if(Number(question.dataset.numb)==10){
        let res = document.getElementById('res')
        result.innerText='right answers: '+res.dataset.answer;
        question.remove();
        answer_1.remove();
        answer_2.remove();
        answer_3.remove();
        answer_4.remove();
}   else{
    question.innerText=questions[Number(question.dataset.numb)].question;
    answer_1.innerText=questions[Number(question.dataset.numb)].answers[0].answer;
    answer_2.innerText=questions[Number(question.dataset.numb)].answers[1].answer;
    answer_3.innerText=questions[Number(question.dataset.numb)].answers[2].answer;
    answer_4.innerText=questions[Number(question.dataset.numb)].answers[3].answer;
    answer_1.dataset.is_true=questions[Number(question.dataset.numb)].answers[0].isTrue;
    answer_2.dataset.is_true=questions[Number(question.dataset.numb)].answers[1].isTrue;
    answer_3.dataset.is_true=questions[Number(question.dataset.numb)].answers[2].isTrue;
    answer_4.dataset.is_true=questions[Number(question.dataset.numb)].answers[3].isTrue;
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
    let question = document.getElementById('question');
    let answer = document.getElementById(event.srcElement.id);
    console.log(answer)
    let res = document.getElementById('res')
    console.log(answer.dataset.is_true);
    if (answer.dataset.is_true=='true'){
        res.dataset.answer= Number(res.dataset.answer)+1;
        console.log(res.dataset.answer);
    }
    question.dataset.numb=Number(question.dataset.numb)+1;
    nextQuestion();
}
