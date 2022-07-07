var beginEl = document.querySelector(".begin");
var formEl = document.querySelector("#submit-quiz");
var startBtn = document.querySelector("#start-quiz");
var questionsCont = document.querySelector(".questions-cont")

var questionEl = document.querySelector("#questions");
var answerBtnEl = document.querySelector("#answer");
var correctResultEl = document.querySelector(".right-wrong");


var score = 0;
var currentQues = 0;

//array that will contain questions and answers
var questions = [
    {
        question: "JavaScript is the same as Java ",
        answers: ["True","False","They can be used interchangeably"],
        correct: "False"
    },
    {
        question: "How do you add a comment in JavaScript?",
        answers: ["<!---->", "//", "()", "[]"],
        correct: "//"
    },
    {
        question: "What is the correct way to write an array?",
        answers: ["var money = [1, 3, 4 ]", "function array()", "var array = 1, 3, 4", "var = array"],
        correct: "var money = [1, 3, 4]"
    },
    {
        question: "How do you declare a variable?",
        answers: ["var = stuff", "v myName", "v = myName", "var stuff = 'myName'"],
        correct: "var stuff = 'myName'"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["+", "||", "=", "&&"],
        correct: "="
    },
    {
        question: "In JavaScript what does '!' mean?",
        answers: ["NOT", "IS", "IF", "WRONG" ],
        correct: "NOT"
    },
    {
        question: "What does === mean?",
        answers: ["equal to in type AND value", "equal to value only", "is assigned to", "It does not mean anything"],
        correct: "equal to in type AND value"
    },
    {
        question: "You should always Pseudocode before starting to code?",
        answers: ["TRUE", "FALSE"],
        correct: "TRUE"
    }
        
        
    

]


// will display question and answers
var displayQuestion = function(ansBtn) {
    //assigns current question to userQuestion
    var userQuestion = questions[currentQues].question
    // places current question into the HTML
     questionEl.innerText = userQuestion;
        
    //userChoice is being assigned answers from the array starting at index 0
    var userChoice = questions[currentQues].answers;
     //for loop to display all answers for a question in a given question.
    for(var i=0; i<userChoice.length; i++) {
       // console.log(userChoice[i]);
        //creates the buttons for the answers
        var ansBtn = document.createElement("button");
        //assigns a class game
        ansBtn.className = "ans-btn";
        //ansBtn.setAttribute("data-correct", questions[i].answers)
        ansBtn.innerText = userChoice[i];
        //check's if answer is right or wrong
       // answerBtnEl.onclick = (e) => {
         //   console.log(e.target.getAttribute("data-correct", questions.correct));
        //}
        ansBtn.addEventListener("click", nextQuestion);
        answerBtnEl.appendChild(ansBtn);
    }
}
//moves on to the next question
var nextQuestion = function(ansBtn) {
    correctAns(ansBtn);
    questionEl.innerText = "";
    answerBtnEl.innerText = "";
    rightOrWrong.innerText = "";
    currentQues+=1;
    displayQuestion();
}

var checkAnswer = function() {
    
}
 
startBtn.onclick = () => {
    beginEl.innerHTML = "",
    questionsCont.classList.remove('questions-cont'); 
    displayQuestion();   
    }

    var timer = function() {

    }

    var correctAns = function(ansBtn) {
        var rightOrWrong = questions[currentQues].correct
        correctResultEl.innerHTML = rightOrWrong;
        if(ansBtn.innerText === rightOrWrong) {
            console.log("CORRECT");
            var correct = document.createElement("<h3></h3>")
            correct.className = ""
        }else {
            console.log("INCORRECT")
        }
    }






