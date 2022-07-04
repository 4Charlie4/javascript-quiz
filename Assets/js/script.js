var beginEl = document.querySelector(".begin");
var formEl = document.querySelector("#submit-quiz");
var startEl = document.querySelector("#start-quiz");

var quizEl = document.querySelector("#quiz-questions");



var removeEl = function() {

    startEl.onclick = () => {
    beginEl.outerHTML = "";    
    }
    
}

removeEl();


var quizQuestionsObj = {[
    Question: "Commonly used data types DON'T include"
    A
]}


var quiz = function() {
    
}