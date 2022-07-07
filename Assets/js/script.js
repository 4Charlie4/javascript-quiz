var beginEl = document.querySelector(".begin");
var formEl = document.querySelector("#submit-quiz");
var startBtn = document.querySelector("#start-quiz");
var questionsCont = document.querySelector(".questions-cont")

var questionEl = document.querySelector("#questions");
var answerBtnEl = document.querySelector("#answer");


var score = 0;
var currentQues = 0;
//array that will contain questions and answers
var questions = [
    {
        question: "What is 2+2",
        answers: ["1","2","4","3"],
        correct: "4"
    },
    {
        question: "What is 3+3",
        answers: ["2", "6", "9", "12"],
        correct: "6"
    }
]


// will display question and answers
var displayQuestion = function() {
    var userQuestion = questions[currentQues].question
     questionEl.innerText = userQuestion;
        
    
    var userChoice = questions[currentQues].answers;
     //for loop to display all answers for a question
    for(var i=0; i<userChoice.length; i++) {
        console.log(userChoice[i]);
        var ansBtn = document.createElement("button");
        ansBtn.className = "ans-btn";
        ansBtn.setAttribute("data-correct", userChoice[i].correct)
        ansBtn.innerText = userChoice[i];
        //check's if answer is right or wrong
        //answerBtnEl.onclick = (e) => {
        //    console.log(e.target.getAttribute("correct"));
        //}
        ansBtn.addEventListener("click", nextQuestion);
        answerBtnEl.appendChild(ansBtn);
    
    }
}
//moves on to the next question
var nextQuestion = function() {
    questionEl.innerText = "";
    answerBtnEl.innerText = "";
    currentQues+=1;
    displayQuestion();
}
 
startBtn.onclick = () => {
    beginEl.innerHTML = "",
    questionsCont.classList.remove('questions-cont'); 
    displayQuestion();   
    }






