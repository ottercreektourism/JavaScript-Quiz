var startBtn = document.querySelector(".startBtn");
var questionDisplay = document.querySelector(".questionField");
var scoreEl = document.querySelector("INSERT SCORE CLASS HERE");
// var userAnswer = 
var AnswerA = document.querySelector("#answerA");
var AnswerA = document.querySelector("#answerA");
var AnswerA = document.querySelector("#answerA");
var AnswerA = document.querySelector("#answerA");
var timerElement = document.querySelector(".timer-count");
var score = 0;
var timerCount;
var timer;
var highscores = [];
var currentquestion = 0;

// Question array with object answers
var questions = [
  {
    question: "first q?",
    a: "ans1",
    b: "ans2",
    c: "ans3",
    d: "ans4",
  }
]

// event listener for startBtn-- starts function.question1() and timer function
// function submit() {
//   for {
//     userSelection === questions.correct {

//     }
//   }

function setScoreText() {
  // scoreVariable.textContent = score;
}

// function question1();
// if (userAnswer === correctAnswer1){
//     if (correntAnswer1 = answerA) {
//         score++;

//     }
//     // var correctAnswer1 === AnswerA

// }

// start.classList.remove ("hide") will bring something back
// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // renderBlanks()
  startTimer()
}

function start() {
  timer()
  var questionData = questions[currentquestion];
  AnswerA.innerText = questionData.a;
  AnswerB.innerText = questionData.b;
  AnswerC.innerText = questionData.c;
  AnswerD.innerText = questionData.d;
  startBtn.classList.add("hide");
}

function timer() {
  timer = setInverval(function () {
    timerCount--;
    timerElement.tetContent = timerCount;
    }, 1000);
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function setTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      // loseGame();
    }
  }, 1000);
}

// timer function
// start button
// if timer starts, first question is asked
// If answer is submitted, new question starts
// When the question is answered wrong, time gets subtracted from the full time + new question
// If time left=0 or last question is answered, then the whole thing ends and your time is over
// displays your score and past attempts with the data permanence thing