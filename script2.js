// retrieving buttons and timers from the HTML
var startBtn = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var userChoices = document.getElementById("userChoices");
var timer = document.getElementById("timer");


var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

var runningQuestionIndex = 0;
var score = 0;
var timerCount = 180;
var highscores = [];
var countdown;

// Question array with object answers
var questions = [
    {
      question: "first q?",
      a: "ans1",
      b: "ans2",
      c: "ans3",
      d: "ans4",
      correct: "ans3"
    },
    {
      question: "second q?",
      a: "ans1",
      b: "ans2",
      c: "ans3",
      d: "ans4",
      correct: "ans1"
    },
    {
      question: "third q?",
      a: "ans1",
      b: "ans2",
      c: "ans3",
      d: "ans4",
      correct: "ans4"
    }
  ]


// Add an event lister to the start button
startBtn.addEventListener("click", start);

// Function to start quiz
function start() {
    countdown = setInterval(timerFunction, 1000);
    startBtn.classList.add("hide");
    userChoices.classList.remove("hide");
    questionDisplay();
  }

function timerFunction(){
    timerCount--;
    timer.innerText = timerCount;
    if (timerCount <= 0){
        endQuiz();
    }
}

function endQuiz(){
    clearInterval(countdown);
    userChoices.classList.add("hide");
    
}

function questionDisplay(){
    var questionData = questions[runningQuestionIndex];
    question.innerText = questionData.question;
    answerA.innerText = questionData.a;
    answerB.innerText = questionData.b;
    answerC.innerText = questionData.c;
    answerD.innerText = questionData.d;
}

function compare(event){
    console.log(event.target);
    if(event.target.innerText!== questions[runningQuestionIndex].correct){
        timerCount -=10;
    }
    runningQuestionIndex++;
    if(runningQuestionIndex > questions.length-1){
        endQuiz();
    }else{
    questionDisplay();
    }
}

function renderLeaderboard(){
    var userInitials = localStorage.getItem("userInitials");
    

}


function saveScore(){

}

saveScoreBtn.addEventListener("click", function (e){
    e.preventDefault();
    var userInitials = document.querySelector("userInitials").value;

    if (userInitials === ""){
        displaymessage("error", "Initials cannot be blank.");
        localStorage.setItem("userInitials", userInitials);
        renderLeaderboard();
    }
});







