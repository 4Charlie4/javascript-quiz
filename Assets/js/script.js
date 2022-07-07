var beginEl = document.querySelector(".begin");
var formEl = document.querySelector("#submit-quiz");
var startBtn = document.querySelector("#start-quiz");
var questionsCont = document.querySelector(".questions-cont")

var questionEl = document.querySelector("#questions");
var answerBtnEl = document.querySelector("#answer");


var score = 0;
//array that will contain questions and answers
var questionsArry = [
    {
        question: "What is 2+2",
        answers: [ 
            {ans: "1", correct: false},
            {ans: "2", correct: false},
            {ans: "4", correct: true}

        ]
    },
    {
        question: "What is 3+3",
        answers: [
            {ans: "3"},
            {ans: "6"},
            {ans: "4"}
        ]
    }
]


// will display question and answers
var displayQuestion = function() {

    //assign questions in question array to new var
    var question = questionsArry[0].question
    console.log(question);
    //display question in HTMl
    questionEl.innerHTML = question;

    

    var answers = questionsArry[0].answers
    
     //for loop to display all answers for a question
    for(i=0; i<answers.length; i++) {
        console.log(answers[i]);
        var ansBtn = document.createElement("button");
        ansBtn.className = "ans-btn";
        ansBtn.setAttribute("correct", answers[i].correct)
        ansBtn.innerText = answers[i].ans
        //check's if answer is right or wrong
        answerBtnEl.onclick = (e) => {
            console.log(e.target.getAttribute("correct"));
        }
    
        answerBtnEl.appendChild(ansBtn);
        
    }
    // supposed to remove question and answer and then replace with new one
    answerBtnEl.addEventListener("click", nextQuestion);
}

 var nextQuestion = function(question) {
    
    
    for(i=0; i<question.length; i++) {
        console.log(question[i]);
        question.innerHTML = question;

    }
 }

var startQuiz = function() {
//removes beginning form and starts game
    startBtn.onclick = () => {
    beginEl.innerHTML = "",
    questionsCont.classList.remove('questions-cont');    
    }
    displayQuestion();
    
}

startQuiz();






