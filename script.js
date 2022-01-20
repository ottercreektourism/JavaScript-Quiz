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

// Retrieving answer choices from the HTML
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

// Setting initial values for counters and empty score object.
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
  // When quiz starts, the timer function starts as well, set to decrease every second
  countdown = setInterval(timerFunction, 1000)
  
  // Hiding startBtn and showing quiz once the start button is clicked. calling questionDisplay() to see the first question.
  startBtn.classList.add("hide");
  quiz.classList.remove("hide");
  questionDisplay();
}

// timerFunction() starts the timer counting down and sets the timerCount to contain the text for the timer variable, and decreases it
function timerFunction(){
    timerCount--;
    timer.innerText = timerCount;
    if (timerCount <= 0) endQuiz();
}

// Shows the first question when the function is called.
function questionDisplay(){
  var questionData = questions[runningQuestionIndex];
  question.innerText = questionData.question;
  answerA.innerText = questionData.a;
  answerB.innerText = questionData.b;
  answerC.innerText = questionData.c;
  answerD.innerText = questionData.d;
}

// If wrong answer, 10 seconds are subtracted. Then next question is shown until question array has been finished.
function compare(event){
  if(event.target.innerText !== questions[runningQuestionIndex].correct) { 
    timerCount -= 10;
    timer.innerText = timerCount;
  }
  runningQuestionIndex++;
  if(runningQuestionIndex < questions.length) questionDisplay();
  else endQuiz();
}

// When the quiz ends, the timer is cleared, quiz is hidden, score is set to equal the time left, scoreform is shown.
function endQuiz(){
  clearInterval(countdown);
  quiz.classList.add("hide");
  endScore.innerText = timer.innerText;
  scoreForm.classList.remove("hide");
}

// Shows the scores by adding them to a list item containing the initials of the player. Appends the list item using the #scores id from HTML
function showScores() {
  var i = 1;
  scores.innerHTML = "";
  for(var initials in highscores) {
    var li = document.createElement("li");
    li.innerText = i++ + ": " + initials + " - " + highscores[initials];
    scores.appendChild(li);
  }
}

// Submits the score into the local storage, hides the form, shows the leaderboard with all scores
function submitScore(){
  highscores[initials.value] = timerCount;

  console.log(highscores);
  localStorage.highscores = JSON.stringify(highscores);

  showScores();
  scoreForm.classList.add("hide");
  leaderboard.classList.remove("hide");
}

// clears the scores when the Clear Highscores button is clicked.
function clearScores() {
  highscores = {};
  localStorage.highscores = JSON.stringify(highscores);
  scores.innerHTML = "";
}

// Function is called when the restart button is clicked. it resets the question index and timer, hides the leaderboard and shows the start button again.
function restart(){
  runningQuestionIndex = 0;
  timerCount = 60;
  highscores = JSON.parse(localStorage.highscores);
  leaderboard.classList.add("hide");
  startBtn.classList.remove("hide");
}