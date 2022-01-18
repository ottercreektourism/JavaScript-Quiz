// retrieving buttons and timers from the HTML
var startBtn = document.querySelector(".startBtn");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timerElement = document.querySelector(".timer");
var questionDisplay = document.querySelector(".questionField");

// var questionDisplay = document.querySelector(".questionField");
// var scoreEl = document.querySelector("INSERT SCORE CLASS HERE");
// var userAnswer = 

// using the answer ids to retrieve them from the 
// HTML and creating variables for them for JS
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

// Retrieving "progress" and "scoreContainer" ids from HMTL.
var progress = document.getElementById("progress");
var scoreContainer = document.getElementById("scoreContainer");


var lastQuestionIndex = questions.length-1;
var runningQuestionIndex = 0;

var score = 0;
var timerCount = 180;
var timer;
var highscores = [];
var currentQuestion = 0;



// Question array with object answers
var questions = [
  {
    question: "first q?",
    a: "ans1",
    b: "ans2",
    c: "ans3",
    d: "ans4",
    correct: "c"
  },
  {
    question: "second q?",
    a: "ans1",
    b: "ans2",
    c: "ans3",
    d: "ans4",
    correct: "a"
  },
  {
    question: "third q?",
    a: "ans1",
    b: "ans2",
    c: "ans3",
    d: "ans4",
    correct: "d"
  }
]

// // start.classList.remove ("hide") will bring something back
// // The startGame function is called when the start button is clicked
// function startGame() {
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   // renderBlanks()
//   startTimer()
// }
// Add an event lister to the start button
startBtn.addEventListener("click", start)

// From Graydon, not sure how to implement them.
questions[currentQuestion].choice.forEach((answer, index) => {
   document.createElement(<button class="answerBtn" data-index="${index}">${answer}</button>);
});

document.querySelector("answers").addEventListener("click", function(e){
    if(e.target.matches(".answerBtn")){

// Function to start quiz
function start() {
  // When quiz starts, the timer function starts as well
  timer()

  // The current question will be referred to as questionData.
  var questionData = questions[currentQuestion];
  answerA.innerText = questionData.a;
  answerB.innerText = questionData.b;
  answerC.innerText = questionData.c;
  answerD.innerText = questionData.d;
  startBtn.classList.add("hide");
  // Invokes the compare function
  compare();
}

// Compare function for comparing the user's choice with the correct answer and determining whether it is right.
function compare(){
  // If the text in choice of the user is the same as the correct answer, then add one to the score and alert the user that their answer is right.
  // Is score necessary?
  if(choice.innerText === questionData.correct){
    window.alert("Correct!");
    score++;
    // If the choice and correct answer do not match, deduct points from the score and display "incorrect"
    // Maybe deduct time instead of score here, not sure.
  }else{
    window.alert("Incorrect.");
    score--;
    // display.timer-10
  }
}

// Simple timer function
function startTimer() {
  // timer is set by using the setInterval function
  timer = setInterval(function () {
    // decreases time by 1 second
    timerCount--;
    // displays the new time on the screen
    timerElement.textContent = timerCount;
    // If the timer is brought down to or past zero, then clear the timer and invoke the endGame function.
    if (timerCount <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// Simple timer idea
function timer() {
  timer = setInverval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    }, 1000);
}

// Another timer idea
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



// ignore this for now. Following tutorial online that I abandoned
function renderQuestion(){
  var q = questions[runningQuestionIndex];
  question.innerHTML = q.question;
  answerA.innerHTML = q.answerA;
  answerB.innerHTML = q.answerB;
  answerC.innerHTML = q.answerC;
  answerD.innerHTML = q.answerD;

  runningQuestionindex = 0;
  renderQuestion()
  runningQuesstionIndex++
}

function counterRender(){
  if(count <= questionTime){
    counter.innerHTML = count;
    count++;

  }else{
    count = 0;
    answerIsWrong();
    if(runningQuestionIndex <lastQuestionIndex){
      runningQuestionIndex++;
      questionRender();
    }else{
      clearInterval(timer);
      scoreRender(); 
    }
    }
  }





// function AnswerIsRight()
// function AnswerIsWrong()


















// // Selects element by class
// var timeEl = document.getElementById("time");

// // Selects element by id
// var mainEl = document.getElementById("counter");

// var secondsLeft = 10;

// function startTimer() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " Time's up";


// }

// startTimer();


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};




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


// timer function
// start button
// if timer starts, first question is asked
// If answer is submitted, new question starts
// When the question is answered wrong, time gets subtracted from the full time + new question
// If time left=0 or last question is answered, then the whole thing ends and your time is over
// displays your score and past attempts with the data permanence thing