// retrieving buttons and timers from the HTML
var startBtn = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var timer = document.getElementById("timer");
var scoreForm = document.getElementById("scoreForm");
var endScore = document.getElementById("endScore");
var initials = document.getElementById("initials");
var leaderboard = document.getElementById("leaderboard");
var scores = document.getElementById("scores");

var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

var runningQuestionIndex = 0;
var timerCount = 60;
var highscores = {};
var countdown;

// Question array with object answers
var questions = [
  { question: "Who invented JavaScript?", a: "Douglas Crockford", b: "Sheryl Sandberg", c: "Brendan Eich", d: "Graydon Scates", correct: "Brendan Eich" },
  { question: "Which one of these is a JavaScript package manager?", a: "Node.js", b: "HTML", c: "npm", d: "TypeScript", correct: "TypeScript" },
  { question: "Which tool can you use to ensure code quality?", a: "Angular", b: "jQuery", c: "RequireJS", d: "ESLint", correct: "ESLint" },
  { question: "What does HTML Stand For?", a:"Home Tool Markup Language", b:"Hyper Text Modul Language", c:"Hyper Text Markup Language", d:"Hyper Test Markup Language", correct:"Hyper Text Markup Language"},
  { question: "Which language is used for styling web pages?", a:"HTML", b:"JQuery", c:"CSS", d:"XML", correct:"CSS"},
  { question: "Which is not a JavaScript Framework?", a:"Python Script", b:"JQuery", c:"Django", d:"NodeJS", correct:"Django"},
  { question: "Which is used for Connect To Database?", a:"PHP", b:"HTML", c:"JS", d:"All", correct:"PHP"},
]

// Function to start quiz
function start() {
  // When quiz starts, the timer function starts as well
  countdown = setInterval(timerFunction, 1000)
  
  // The current question will be referred to as questionData.
  startBtn.classList.add("hide");
  quiz.classList.remove("hide");
  questionDisplay();
}

function timerFunction(){
    timerCount--;
    timer.innerText = timerCount;
    if (timerCount <= 0) endQuiz();
}

function endQuiz(){
  clearInterval(countdown);
  quiz.classList.add("hide");
  endScore.innerText = timer.innerText;
  scoreForm.classList.remove("hide");
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
  if(event.target.innerText !== questions[runningQuestionIndex].correct) { 
    timerCount -= 10;
    timer.innerText = timerCount;
  }
  runningQuestionIndex++;
  if(runningQuestionIndex < questions.length) questionDisplay();
  else endQuiz();
}

function showscores() {
  var i = 1;
  scores.innerHTML = "";
  for(var initials in highscores) {
    var li = document.createElement("li");
    li.innerText = i++ + ": " + initials + " - " + highscores[initials];
    scores.appendChild(li);
  }
}

function submitscore(){
  highscores[initials.value] = timerCount;

  console.log(highscores);
  localStorage.highscores = JSON.stringify(highscores);

  showscores();
  scoreForm.classList.add("hide");
  leaderboard.classList.remove("hide");
}

function clearscores() {
  highscores = {};
  localStorage.highscores = JSON.stringify(highscores);
  scores.innerHTML = "";
}

function restart(){
  runningQuestionIndex = 0;
  timerCount = 60;
  highscores = JSON.parse(localStorage.highscores);
  leaderboard.classList.add("hide");
  startBtn.classList.remove("hide");
}