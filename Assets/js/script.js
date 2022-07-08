var beginEl = document.querySelector(".begin");
var formEl = document.querySelector("#submit-quiz");
var startBtn = document.querySelector("#start-quiz");
var questionsCont = document.querySelector(".questions-cont")

//questions/answers part of quiz
var questionEl = document.querySelector("#questions");
var answerBtnEl = document.querySelector("#answer");
var correctResultEl = document.querySelector(".right-wrong");
var resultsCont = document.querySelector("#results-cont");

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
          //  console.log(e.target.getAttribute("data-correct", questions.correct));
       // }
        ansBtn.addEventListener("click", nextQuestion);
        answerBtnEl.appendChild(ansBtn);
    }
}
//moves on to the next question
var nextQuestion = function(ansBtn) {

    correctAns(ansBtn);
    //gives time for user to see if they got the answer right or not
    setTimeout (function(){
    questionEl.innerText = "";
    answerBtnEl.innerText = "";
    correctResultEl.innerText = "";
    currentQues+=1;
    if (currentQues <=6) {
    displayQuestion()
    }  else {
        //removes hide class to show results
        resultsCont.classList.remove('hide');
        //score will display on screen and store 
        var scoreEl = document.createElement("h3");
        scoreEl.innerText = score + " is the Score."
        resultsCont.appendChild(scoreEl);
        console.log(score);

        
        //creates storage for the highscore
        var highScore = localStorage.getItem("HighScore");
        if (highScore === null) {
            highScore = 0;
        }
        if (score > highScore) {
            localStorage.setItem("HighScore", score);
                alert("You now have the new HighScore!");

        }
        //creates element to display highScore
        var highScoreEl = document.createElement("h3");
        highScoreEl.innerText = highScore + " is the HighScore";
        resultsCont.appendChild(highScoreEl);
        console.log(highScore);
        
    }
    }, 300);
    
    }   
    


 // starts the quiz
startBtn.onclick = () => {
    beginEl.innerHTML = "",
    questionsCont.classList.remove('questions-cont'); 
    displayQuestion();   
    }




    //will let us know if answer that is chosen is correct or not.
    var correctAns = function(ansBtn) {
        var rightOrWrong = questions[currentQues].correct
        //tests ansBtn against rightOrWrong to determine whether the answer chosen is correct.
        if(ansBtn.target.innerHTML === rightOrWrong) {
            console.log("CORRECT");
            var correct = document.createElement("h3");
            correct.innerText = "CORRECT!";
            correctResultEl.appendChild(correct);
            score+=7
        }else {
            console.log("INCORRECT")
            var incorrect = document.createElement("h3");
            incorrect.innerText = "INCORRECT!";
            correctResultEl.appendChild(incorrect);
            score-=3
        }
        
    }

    

    var timer = function() {

    }

    





